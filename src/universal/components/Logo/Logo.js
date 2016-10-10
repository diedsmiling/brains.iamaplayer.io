import React, {PropTypes} from 'react'
import styles from './Logo.css'
import logo from './logo.png'
import classNames from 'classnames'

const Logo = props => {
  return (
    <h3 className={classNames(props.className, styles.heading)}>
      <img className={styles.logo} src={logo}/> iamaplayer.io
    </h3>
  )
}

Logo.propTypes = {
  className: PropTypes.string
}

export default Logo
