import {connect} from 'react-redux'
import React, {Component} from 'react'
import Menu from 'universal/modules/layouts/components/MainLayout/Sidebar/Menu/Menu'

@connect(mapStateToProps)
export default class SidebarContainer extends Component {
  render() {
    return <Menu {...this.props}/>
  }
}

function mapStateToProps(state, ownProps) {
  return {
    menuItems: [
      {
        urn: 'news',
        text: 'News'
      },
      {
        urn: 'kanban',
        text: 'Kanban'
      }
    ]
  }
}
