import {connect} from 'react-redux'
import React, {Component, PropTypes} from 'react'
import Sidebar from 'universal/modules/layouts/components/MainLayout/Sidebar/Sidebar'
import {ensureState} from 'redux-optimistic-ui'

@connect(mapStateToProps)
export default class SidebarContainer extends Component {
  render() {
    return <Sidebar {...this.props}/>
  }
}

function mapStateToProps(state) {
  return {
    isOpen: ensureState(state).getIn(['layout', 'isDrawerOpen'])
  }
}
