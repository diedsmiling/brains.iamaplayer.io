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
      <div>
        <div className={styles.component}>
          {children}
        </div>
        <Footer/>
      </div>
    )
  }
}
