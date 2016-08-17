import socketCluster from 'socketcluster-client'
import {fromJS, Map as iMap} from 'immutable'
import {ensureState} from 'redux-optimistic-ui'
import socketOptions from '../../../utils/socketOptions'
import isMobile from 'ismobilejs'
/*
 * Action types
 */
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER'
/*
 * Reducer
 */
const initialState = iMap({
  device: {
    mobile: isMobile.phone,
    tablet: isMobile.tablet
  },
  isDrawerOpen: !isMobile.phone
})

export default function reducer(state = initialState, action) {
  /* eslint-disable no-case-declarations, no-redeclare */
  switch (action.type) {
    case TOGGLE_DRAWER:
      return state.updateIn(['layout', 'isDrawerOpen'], v => !v)
    default:
      return state
  }
}

/*
 * Action creators
 */

export function toggleDrawer() {
  return {
    type: TOGGLE_DRAWER,
    payload: device
  }
}

export const layoutActions = {
  toggleDrawer
}
