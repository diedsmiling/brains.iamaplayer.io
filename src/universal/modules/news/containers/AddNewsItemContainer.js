import React, {Component} from 'react'

import {connect} from 'react-redux'
import Form from 'universal/modules/news/components/Form'
import {reduxSocket} from 'redux-socket-cluster'
import socketOptions from 'universal/utils/socketOptions'
import {ensureState} from 'redux-optimistic-ui'
import requireAuth from 'universal/decorators/requireAuth/requireAuth'

@connect(mapStateToProps, mapDispatchToProps)
@requireAuth
@reduxSocket(socketOptions)

export default class AddNewsItemContainer extends Component {
  static propTypes = {

  }

  constructor(props) {
    super(props)
    const {socketState} = props
    if (socketState === 'closed') {
      // handle here & not in middleware to make it atomic, otherwise state could change between loadNews & loadNews
      // dispatch(loadNews())
    }
  }

  render() {
    return <Form {...this.props}/>
  }
}

function mapStateToProps(state) {
  state = ensureState(state)
  const auth = state.get('auth')
  return {
    isAuthenticated: auth.get('isAuthenticated')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}
