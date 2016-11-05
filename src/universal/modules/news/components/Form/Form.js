import React, {PropTypes} from 'react'
import styles from './Form.css'
import FlatButton from 'material-ui/svg-icons/action/note-add'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

const Form = props => (
  <div className={styles.formWrapper}>
    <h2>Add a news item</h2>
    <label htmlFor='dd'>
      <FloatingActionButton mini secondary>
        <input id='dd' type='file' style={{visibility: 'hidden'}}/>
        <ContentAdd/>
      </FloatingActionButton>
    </label>

  </div>
)

export default Form
