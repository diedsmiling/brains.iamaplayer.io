import React from 'react'
import MarkdownEditor from 'material-ui-markdown-editor'

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
