import React from 'react'
import styles from './Logo.css'
import logo from './logo.png'

export default () => {
  return (
    <h3 className={styles.heading}>
      <img className={styles.logo} src={logo}/> iamaplayer.io
    </h3>
  )
}
