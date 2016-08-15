import makeReducer from 'universal/redux/makeReducer'
import {resolvePromiseMap} from 'universal/utils/promises'
import MainLayoutContainer from 'universal/modules/layouts/containers/MainLayoutContainer'

export default function (store) {
  return {
    path: 'kanban',
    component: MainLayoutContainer,
    getIndexRoute: async (location, cb) => {
      const promiseMap = setKanbanImports()
      const importMap = await resolvePromiseMap(promiseMap)
      const {component, optimistic, ...asyncReducers} = getKanbanImports(importMap)
      const newReducer = makeReducer(asyncReducers, optimistic)
      store.replaceReducer(newReducer)
      cb(null, {component})
    }
  };
}

function setKanbanImports() {
  return new Map([
    ['component', System.import('universal/modules/kanban/containers/Kanban/KanbanContainer')],
    ['optimistic', System.import('redux-optimistic-ui')],
    ['lanes', System.import('universal/modules/kanban/ducks/lanes')],
    ['notes', System.import('universal/modules/kanban/ducks/notes')],
    ['socket', System.import('redux-socket-cluster')]
  ])
}

function getKanbanImports(importMap) {
  return {
    component: importMap.get('component'),
    optimistic: importMap.get('optimistic').optimistic,
    lanes: importMap.get('lanes').reducer,
    notes: importMap.get('notes').reducer,
    socket: importMap.get('socket').socketClusterReducer
  }
}
