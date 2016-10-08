import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import NewsList from 'universal/modules/news/components/NewsList/NewsList'
import {reduxSocket} from 'redux-socket-cluster'
import socketOptions from 'universal/utils/socketOptions'
import {loadLanes, laneActions} from 'universal/modules/kanban/ducks/lanes'
import {loadNotes} from 'universal/modules/kanban/ducks/notes'
import {ensureState} from 'redux-optimistic-ui'
import requireAuth from 'universal/decorators/requireAuth/requireAuth'

@connect(mapStateToProps, mapDispatchToProps)
@requireAuth
@reduxSocket(socketOptions)

export default class KanbanContainer extends Component {
  static propTypes = {

  }

  constructor(props) {
    super(props)
    const {dispatch, socketState} = props
    if (socketState === 'closed') {
      // handle here & not in middleware to make it atomic, otherwise state could change between loadNews & loadNews
      // dispatch(loadNews())
    }
  }

  render() {
    return <NewsList {...this.props}/>
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
