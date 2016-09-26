import r from './rethinkdriver'
import {getDotenv} from '../../universal/utils/dotenv'
import {prepareUserData} from '../../server/graphql/models/User/helpers'
getDotenv()

// ava is the test database
const databases = ['iamaplayer', 'ava']

const database = [
  {name: 'users', indices: ['email']},
  {name: 'lanes', indices: ['userId']},
  {name: 'notes', indices: ['laneId']}
]

export default async function setupDB(isUpdate = false) {
  await Promise.all(databases.map(db => ({db, isUpdate})).map(reset))
  await r.getPool().drain()
  console.log(`>>Database setup complete!`)
}

async function reset({db, isUpdate}) {
  const dbList = await r.dbList()
  if (dbList.indexOf(db) === -1) {
    console.log(`>>Creating Database: ${db}`)
    await r.dbCreate(db)
  }
  const tables = await r.db(db).tableList()
  if (!isUpdate) {
    console.log(`>>Dropping tables on: ${db}`)
    await Promise.all(tables.map(table => r.db(db).tableDrop(table)))
  }
  console.log(`>>Creating tables on: ${db}`)
  await Promise.all(database.map(table => {
    if (!isUpdate || tables.indexOf(table.name) === -1) {
      return r.db(db).tableCreate(table.name)
    }
    return Promise.resolve(false)
  }))
  console.log(`>>Adding table indices on: ${db}`)
  const tableIndicies = await Promise.all(database.map(table => {
    return r.db(db).table(table.name).indexList().run()
  }))
  await Promise.all([...database.map((table, i) => {
    const indicies = tableIndicies[i] || []
    return table.indices.map(index => {
      if (indicies.indexOf(index) === -1) {
        return r.db(db).table(table.name).indexCreate(index).run()
      }
      return Promise.resolve(false)
    })
  })])
  console.log('>>Adding default user')

  const userDoc = await prepareUserData(
    process.env.DEFAULT_USER_EMAIL,
    process.env.DEFAULT_USER_PASS,
    true
  )
  await r.db(db).table('users').insert(userDoc)
  console.log(`>>Setup complete for: ${db}`)
}
