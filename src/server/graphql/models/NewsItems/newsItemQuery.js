import r from '../../../database/rethinkdriver'
import {GraphQLNonNull, GraphQLID} from 'graphql'
import {NewsItem} from './newsItemSchema'
import {errorObj} from '../utils'
import {isLoggedIn} from '../authorization'

export default {
  getNoteById: {
    type: NewsItem,
    args: {
      id: {type: new GraphQLNonNull(GraphQLID)}
    },
    async resolve(source, {id}, {authToken}) {
      isLoggedIn(authToken)
      const newsItem = await r.table('newsItems').get(id)
      if (!newsItem) {
        throw errorObj({_error: 'newsItem not found'})
      }
      return newsItem
    }
  }
}

