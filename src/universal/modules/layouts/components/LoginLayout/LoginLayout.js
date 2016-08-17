import React, {PropTypes, Component} from 'react'
import styles from './LoginLayout.css'

export default class LoginLayout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };
  render() {
    const {children} = this.props
    return (
      <div className='container-fluid'>
        <div className={styles.centered}>
          <div
            className={`
              col-xs-12
              col-sm-8 col-sm-offset-2
              col-md-8 col-md-offset-2
              col-lg-4 col-lg-offset-4
            `}
          >
            {children}
          </div>
        </div>
      </div>
    )
  }
}
