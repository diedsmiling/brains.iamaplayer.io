import makeReducer from 'universal/redux/makeReducer'
import {resolvePromiseMap} from 'universal/utils/promises'
import MainLayoutContainer from 'universal/modules/layouts/containers/MainLayout/MainLayoutContainer'
import AddNewsItemContainer from 'universal/modules/news/containers/AddNewsItemContainer'

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
    },
    childRoutes: [
      {
        path: 'add',
        component: AddNewsItemContainer
      }
    ]
  }
}

function setNewsImports() {
  return new Map([
    ['component', System.import('universal/modules/news/containers/NewsListContainer')],
    ['optimistic', System.import('redux-optimistic-ui')],
    ['news', System.import('universal/modules/news/ducks/news')],
    ['socket', System.import('redux-socket-cluster')]
  ])
}

function getNewsImports(importMap) {
  return {
    component: importMap.get('component'),
    optimistic: importMap.get('optimistic').optimistic,
    news: importMap.get('news').reducer,
    socket: importMap.get('socket').socketClusterReducer
  }
}
