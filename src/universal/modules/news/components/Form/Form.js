import React, {PropTypes} from 'react'
import styles from './Form.css'
import FlatButton from 'material-ui/svg-icons/action/note-add'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import Editor from 'universal/components/Editor'
const today = new Date()

const Form = props => (
  <div className={styles.formWrapper}>
    <h2>Add a news item!</h2>
    <div className='form-group'>
      <TextField
        hintText='Title'
        floatingLabelText='Title'
      />
    </div>
    <div className='form-group'>
      <DatePicker defaultDate={today} hintText='Date'/>
    </div>
    <div className='form-group'>
      <Editor/>
    </div>
  </div>
)

export default Form
