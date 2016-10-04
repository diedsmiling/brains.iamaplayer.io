import {fromJS, Map as iMap, List as iList} from 'immutable'
import {ensureState} from 'redux-optimistic-ui'
import socketCluster from 'socketcluster-client'
import {prepareGraphQLParams} from '../../../utils/fetching'
import socketOptions from '../../../utils/socketOptions'

/*
 * Action types
 */
export const NEWSITEMS = 'newsItems' // db table
export const NEWSITEM = 'newsItem' // dnd
export const ADD_NEWSITEM = 'ADD_NEWSITEM'
export const UPDATE_NEWSITEM = 'UPDATE_NEWSITEM'
export const DELETE_NEWSITEM = 'DELETE_NEWSITEM'
const CLEAR_NEWSITEMS = 'CLEAR_NEWSITEMS' // local state flush
const ADD_NEWSITEM_SUCCESS = 'ADD_NEWSITEM_SUCCESS'
const UPDATE_NEWSITEM_SUCCESS = 'UPDATE_NEWSITEM_SUCCESS'
const DELETE_NEWSITEM_SUCCESS = 'DELETE_NEWSITEM_SUCCESS'
const ADD_NEWSITEM_ERROR = 'ADD_NEWSITEM_ERROR'
const UPDATE_NEWSITEM_ERROR = 'UPDATE_NEWSITEM_ERROR'
const DELETE_NEWSITEM_ERROR = 'DELETE_NEWSITEM_ERROR'


/*
 * Reducer
 */
const initialState = iMap({
  synced: false,
  error: null,
  data: iList()
})

export function reducer(state = initialState, action) {
  /* eslint-disable no-case-declarations, no-redeclare */
  switch (action.type) {
    case ADD_NEWSITEM:
      const {doc: addDoc} = action.payload.variables
      return state.merge({
        synced: action.meta && action.meta.synced || false,
        data: state.get('data').push(fromJS(addDoc))
      })
    case UPDATE_NEWSITEM:
      const {doc: updateDoc} = action.payload.variables
      return state.merge({
        synced: action.meta && action.meta.synced || false,
        data: state.get('data').map(item => item.get('id') === updateDoc.id ? item.merge(updateDoc) : item)
      })
    case DELETE_NEWSITEM:
      const {id} = action.payload.variables
      return state.merge({
        synced: action.meta && action.meta.synced || false,
        data: state.get('data').filter(item => item.get('id') !== id)
      })
    case CLEAR_NEWSITEMS:
      return initialState
    case ADD_NEWSITEM_SUCCESS:
    case UPDATE_NEWSITEM_SUCCESS:
    case DELETE_NEWSITEM_SUCCESS:
      return state.merge({
        synced: true,
        error: null
      })
    case ADD_NEWSITEM_ERROR:
    case UPDATE_NEWSITEM_ERROR:
    case DELETE_NEWSITEM_ERROR:
      return state.merge({
        synced: true,
        error: action.error || 'Error'
      })
    default:
      return state
  }
}

/*
 *Action creators
 */
const baseMeta = {
  table: NEWSITEMS,
  isOptimistic: true,
  synced: false
}

export function loadNewsItems() {
  const query = `
  subscription {
    getAllNotes {
      id,
      title,
      laneId,
      userId,
      index
    }
  }`
  const serializedParams = prepareGraphQLParams({query})
  const sub = 'getAllNewsItems'
  const socket = socketCluster.connect(socketOptions)
  socket.subscribe(serializedParams, {waitForAuth: true})
  return dispatch => {
    // client-side changefeed handler
    socket.on(sub, data => {
      const meta = {synced: true}
      if (!data.old_val) {
        dispatch(addNewsItem(data.new_val, meta))
      } else if (!data.new_val) { // eslint-disable-line no-negated-condition
        dispatch(deleteNewsItem(data.old_val.id, meta))
      } else {
        dispatch(updateNewsItem(data.new_val, meta))
      }
    })

    socket.on('unsubscribe', channelName => {
      if (channelName === sub) {
        dispatch({type: CLEAR_NEWSITEMS})
      }
    })
  }
}

export function addNewsItem(doc, meta) {
  const query = `
  mutation($doc: NewNewsItem!){
     payload: addNewsItem(newsItem: $doc) {
      id
    }
  }`
  return {
    type: ADD_NEWSITEM,
    payload: {
      query,
      variables: {doc}
    },
    meta: Object.assign({}, baseMeta, meta)
  }
}

export function updateNewsItem(doc, meta) {
  const query = `
  mutation($doc: UpdatedNewsItem!){
     payload: updateNewsItem(newsItem: $doc) {
      id
    }
  }`
  return {
    type: UPDATE_NEWSITEM,
    payload: {
      query,
      variables: {doc}
    },
    meta: Object.assign({}, baseMeta, meta)
  }
}

export function deleteNewsItem(id, meta) {
  const query = `
  mutation($id: ID!) {
     payload: deleteNewsItem(id: $id)
  }`
  return {
    type: DELETE_NEWSITEM,
    payload: {
      query,
      variables: {id}
    },
    meta: Object.assign({}, baseMeta, meta)
  }
}

export const newsItemsActions = {
  addNewsItem,
  updateNewsItem,
  deleteNewsItem
}
