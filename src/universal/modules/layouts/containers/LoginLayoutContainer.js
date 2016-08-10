import React, {PropTypes, Component} from 'react'
import LoginLayout from 'universal/modules/layouts/components/LoginLayout/LoginLayout'
import {connect} from 'react-redux'
import {ensureState} from 'redux-optimistic-ui'
//import requireAuth from 'universal/decorators/requireAuth/requireAuth'

@connect(mapStateToProps)

export default class LoginLayoutContainer extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
  };

  render() {
    return <LoginLayout {...this.props}/>
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: ensureState(state).getIn(['auth', 'isAuthenticated'])
  }
}
