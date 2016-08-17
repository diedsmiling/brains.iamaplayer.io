import React, {PropTypes} from 'react'
import AppBar from 'material-ui/AppBar'
import {COLORS} from 'universal/configs'

const Header = props => (
  <div>
    <AppBar
      title={props.title}
      style={{
        backgroundColor: COLORS.emerald
      }}
      iconClassNameRight='muidocs-icon-navigation-expand-more'
    />
  </div>
)
Header.propTypes = {
  title: PropTypes.string.isRequired
}
export default Header
