import {connect} from 'react-redux'
import React, {Component} from 'react'
import Menu from 'universal/modules/layouts/components/MainLayout/Sidebar/Menu/Menu'
import ReceiptIcon from 'material-ui/svg-icons/action/receipt'
import ListIcon from 'material-ui/svg-icons/action/list'

@connect(mapStateToProps)
export default class SidebarContainer extends Component {
  render() {
    return <Menu {...this.props}/>
  }
}

function mapStateToProps() {
  return {
    menuItems: [
      {
        urn: '/news',
        text: 'News',
        icon: <ReceiptIcon/>
      },
      {
        urn: '/kanban',
        text: 'Matches',
        icon: <ListIcon/>
      }
    ]
  }
}
