import socketCluster from 'socketcluster-client'
import {fromJS, Map as iMap} from 'immutable'
import {ensureState} from 'redux-optimistic-ui'
import socketOptions from '../../../utils/socketOptions'
import {deleteNote} from './notes'

/*
 * Action types
 */
export const CHECK_DEVICE = 'CHECK_DEVICE'
/*
 * Reducer
 */
const initialState = iMap({
  isMobile: false,
  isTablet: false
})

export function reducer(state = initialState, action) {
  /* eslint-disable no-case-declarations, no-redeclare */
  switch (action.type) {
    case CHECK_DEVICE:
      console.log(action)
      return state
      //return state.merge({
      //  synced: action.meta && action.meta.synced || false,
      //  data: state.get('data').push(fromJS(addDoc))
      //})
    default:
      return state
  }
}

/*
 * Action creators
 */

export function checkDevice(device) {
  return {
    type: CHECK_DEVICE,
    payload: {
      device
    }
  }
}

export const layoutActions = {
  checkDevice
}
