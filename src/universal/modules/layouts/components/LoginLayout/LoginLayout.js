import React, {PropTypes, Component} from 'react'
import Footer from 'universal/components/Footer/Footer'
import styles from './LoginLayout.css'

export default class LoginLayout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };
  render() {
    const {isAuthenticated, children} = this.props
    return (
      <div className={styles.centered}>
        <div className={`col-sm-12 col-xs-12 col-md-8 col-md-offset-2 col-lg-4 col-lg-offset-4`}>
          {children}
        </div>
      </div>
    )
  }
}
