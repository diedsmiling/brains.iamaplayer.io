import React from 'react'
import MarkdownEditor from 'material-ui-markdown-editor'
import '../../styles/md-editor.css'

export default class Editor extends React.Component {
  render() {
    return (
      <div>
        <MarkdownEditor
          title='Foo'
          code='# Fancy markdown editor!'
        />
      </div>
    )
  }
}
