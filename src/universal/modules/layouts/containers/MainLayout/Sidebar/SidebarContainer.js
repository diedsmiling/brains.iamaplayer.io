import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import React, {Component} from 'react'
import Sidebar from 'universal/modules/layouts/components/MainLayout/Sidebar/Sidebar'
import {ensureState} from 'redux-optimistic-ui'
import {layoutActions} from 'universal/modules/layouts/ducks/layout'

@connect(mapStateToProps, mapDispatchToProps)
export default class SidebarContainer extends Component {
  render() {
    return <Sidebar {...this.props}/>
  }
}

function mapStateToProps(state) {
  return {
    isOpen: ensureState(state).getIn(['layout', 'isDrawerOpen']),
    isDocked: !ensureState(state).getIn(['layout', 'device']).mobile
  }
}

function mapDispatchToProps(dispatch) {
  return {
    layoutActions: bindActionCreators({...layoutActions}, dispatch),
    dispatch
  }
}
