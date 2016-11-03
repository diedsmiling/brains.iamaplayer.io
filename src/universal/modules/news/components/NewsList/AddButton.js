import {Link} from 'react-router'
import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import NoteAdd from 'material-ui/svg-icons/action/note-add'

const AddButton = () => (
  <Link to='/news/add'>
    <FlatButton
      style={{fontWeight: 200, marginTop: '20px', color: '#ffffff'}}
      backgroundColor='#2ECC71'
      hoverColor='#289A58'
      label='Add one'
      labelPosition='before'
      icon={<NoteAdd color='#ffffff'/>}
    />
  </Link>
)

export default AddButton
