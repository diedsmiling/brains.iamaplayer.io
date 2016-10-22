import React, {PropTypes, Component} from 'react'
import Landing from 'universal/modules/landing/components/Landing/Landing'
import {connect} from 'react-redux'
import {ensureState} from 'redux-optimistic-ui'
import requireAuth from 'universal/decorators/requireAuth/requireAuth'

@connect(mapStateToProps)
@requireAuth
export default class LandingContainer extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
  };

  render() {
    return <Landing {...this.props}/>
  }
}

function mapStateToProps(state) {
  state = ensureState(state)
  const auth = state.get('auth')
  return {
    isAuthenticated: ensureState(state).getIn(['auth', 'isAuthenticated']),
    hasAuthError: Boolean(auth.get('error').size)
  }
}
