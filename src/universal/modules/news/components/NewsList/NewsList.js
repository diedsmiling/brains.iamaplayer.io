import React, {Component, PropTypes} from 'react'
import styles from './NewsList.css'
import {push} from 'react-router-redux'
import NoData from 'universal/components/NoData/NoData'
import FlatButton from 'material-ui/FlatButton'
import NoteAdd from 'material-ui/svg-icons/action/note-add'

const AddButton = () => (
  <FlatButton
    style={{fontWeight: 200, marginTop: '10px', color: '#ffffff'}}
    backgroundColor='#2ECC71'
    hoverColor='#289A58'
    label='Add one'
    labelPosition='before'
    icon={<NoteAdd color='#ffffff'/>}
  />
)

export default class NewsList extends Component {
  static propTypes = {
    dispatch: PropTypes.func
  }

  componentDidMount() {
    const {dispatch} = this.props
    dispatch(push('news'))
  }

  render() {
    return (
      <div className={styles.list}>
        <NoData addButton={<AddButton/>} text='We have tried very hard, but failed to find any news!'/>
      </div>
    )
  }
}
