import {reducer as form} from 'redux-form'
import {compose} from 'redux'
import {combineReducers} from 'redux-immutablejs'
import auth from '../modules/auth/ducks/auth'
import layout from '../modules/layouts/ducks/layout'
import {routing} from './routing'

const currentReducers = {
  layout,
  auth,
  routing,
  form
}

export default (newReducers, reducerEnhancers) => {
  Object.assign(currentReducers, newReducers)
  const reducer = combineReducers({...currentReducers})
  if (reducerEnhancers) {
    return Array.isArray(reducerEnhancers) ? compose(...reducerEnhancers)(reducer) : reducerEnhancers(reducer)
  }
  return reducer
}
