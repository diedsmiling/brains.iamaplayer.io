import React, {PropTypes, Component} from 'react'
import MainLayout from 'universal/modules/layouts/components/MainLayout/MainLayout'
import {connect} from 'react-redux'
import {ensureState} from 'redux-optimistic-ui'
import requireAuth from 'universal/decorators/requireAuth/requireAuth'
import isMobile from 'ismobilejs'

@connect(mapStateToProps)
@requireAuth
export default class LandingContainer extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
  }

  render() {
    return <MainLayout {...this.props}/>
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: ensureState(state).getIn(['auth', 'isAuthenticated']),
    isMobile: isMobile.phone
  }
}

