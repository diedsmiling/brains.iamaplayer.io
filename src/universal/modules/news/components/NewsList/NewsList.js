import React, {Component, PropTypes} from 'react'
import styles from './NewsList'
import {push} from 'react-router-redux'

export default class NewsList extends Component {
  static propTypes = {

  }

  componentDidMount() {
    const {dispatch} = this.props
    dispatch(push('news'))
  }

  render() {
    return (
      <div className={styles.list}>News List</div>
    )
  }
}
