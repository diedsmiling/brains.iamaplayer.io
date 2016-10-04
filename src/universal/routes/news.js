import makeReducer from 'universal/redux/makeReducer'
import {resolvePromiseMap} from 'universal/utils/promises'
import MainLayoutContainer from 'universal/modules/layouts/containers/MainLayout/MainLayoutContainer'

export default function (store) {
  return {
    path: 'news',
    component: MainLayoutContainer,
    getIndexRoute: async (location, cb) => {
      const promiseMap = setNewsImports()
      const importMap = await resolvePromiseMap(promiseMap)
      const {component, optimistic, ...asyncReducers} = getNewsImports(importMap)
      const newReducer = makeReducer(asyncReducers, optimistic)
      store.replaceReducer(newReducer)
      cb(null, {component})
    }
  }
}

function setNewsImports() {
  return new Map([
    ['component', System.import('universal/modules/news/containers/NewsList/NewsListContainer')],
    ['optimistic', System.import('redux-optimistic-ui')],
    ['news', System.import('universal/modules/news/ducks/news')],
    ['socket', System.import('redux-socket-cluster')]
  ])
}

function getNewsImports(importMap) {
  return {
    component: importMap.get('component'),
    optimistic: importMap.get('optimistic').optimistic,
    lanes: importMap.get('news').reducer,
    socket: importMap.get('socket').socketClusterReducer
  }
}
