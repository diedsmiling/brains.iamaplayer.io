import React, {Component, PropTypes} from 'react'
import styles from './NewsList'

export default class NewsList extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className={styles.list}>News List</div>
    )
  }
}
