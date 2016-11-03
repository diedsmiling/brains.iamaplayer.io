import React, {Component, PropTypes} from 'react'
import styles from './NewsList.css'
import {push} from 'react-router-redux'

export default class NewsList extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    childre: PropTypes.element
  }

  componentDidMount() {
    const {dispatch} = this.props
    dispatch(push('news'))
  }

  render() {
    return (
      <div className={styles.list}>
        {this.props.children}
      </div>
    )
  }
}
