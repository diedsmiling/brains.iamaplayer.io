import React, {PropTypes, Component} from 'react'
import Sidebar from 'universal/modules/layouts/containers/MainLayout/Sidebar/SidebarContainer'
import Header from 'universal/modules/layouts/containers/MainLayout/Header/HeaderContainer'
//import Navigation from 'universal/components/Navigation/Navigation'
import styles from './MainLayout.css'

export default class MainLayout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
  };

  render() {
    const {children} = this.props
    return (
      <div>
        <Header/>
        <Sidebar/>
        <div className={`${styles.component}  container-fluid`}>
          {children}
        </div>
      </div>
    )
  }
}
