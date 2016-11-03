import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {reduxSocket} from 'redux-socket-cluster'
import socketOptions from 'universal/utils/socketOptions'
import {loadLanes, laneActions} from 'universal/modules/kanban/ducks/lanes'
import {loadNotes} from 'universal/modules/kanban/ducks/notes'
import {ensureState} from 'redux-optimistic-ui'
import requireAuth from 'universal/decorators/requireAuth/requireAuth'

import NoData from 'universal/components/NoData'
import NewsList from 'universal/modules/news/components/NewsList'
import AddButton from 'universal/modules/news/components/NewsList/AddButton'
import Table from 'universal/modules/news/components/NewsList/Table'
console.log(NewsList)
const NoDataWrapper = () => (
  <NoData
    addButton={<AddButton/>}
    text='We have tried very hard, but failed to find any news!'
  />
)

@connect(mapStateToProps, mapDispatchToProps)
@requireAuth
@reduxSocket(socketOptions)

export default class NewsListContainer extends Component {
  constructor(props) {
    super(props)
    const {socketState} = props
    if (socketState === 'closed') {
      // handle here & not in middleware to make it atomic, otherwise state could change between loadNews & loadNews
      // dispatch(loadNews())
    }
  }

  render() {
    return (
      <NewsList {...this.props}/>
    )
  }
}

function mapStateToProps(state) {
  state = ensureState(state)
  const auth = state.get('auth')
  return {
    children: state.newsItems ? <Table/> : <NoDataWrapper/>,
    isAuthenticated: auth.get('isAuthenticated')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}
