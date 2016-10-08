import React, {PropTypes, Component} from 'react'
import Sidebar from 'universal/modules/layouts/containers/MainLayout/Sidebar/SidebarContainer'
import Header from 'universal/modules/layouts/containers/MainLayout/Header/HeaderContainer'
//import Navigation from 'universal/components/Navigation/Navigation'
import styles from './MainLayout.css'
import classNames from 'classnames'

export default class MainLayout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    isMobile: PropTypes.bool
  };

  render() {
    const {children, isMobile} = this.props
    return (
      <div>
        <Header/>
        <Sidebar/>
        <div
          className={classNames({
            'container-fluid': true,
            [styles.desktopOffset]: !isMobile
          })
         }
        >
          {children}
        </div>
      </div>
    )
  }
}
