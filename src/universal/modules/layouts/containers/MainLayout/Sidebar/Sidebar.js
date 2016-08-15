import {connect} from 'react-redux'
import React, {Component, PropTypes} from 'react'
import Sidebar from 'modules/layouts/MainLayout/Sidebar/Sidebar'

@connect(mapStateToProps, mapDispatchToProps)
export default class SidebarContainer extends Component {
  render() {
    return <Sidebar {...this.props}/>
  }
}

const mapStateToProps = stateProps => ({
  isOpened: true
})

const mapDispatchToProps = dispatch => ({

})