import React, {PropTypes} from 'react'
//import classes from './Menu.css'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

const MenuWrapper = props => (
  <div>
    <Menu>
      <MenuItem primaryText='News'/>
      <MenuItem primaryText='Pages'/>
      <MenuItem primaryText='Seasons'/>
      <MenuItem primaryText='Teams'/>
    </Menu>
  </div>
)
Menu.propTypes = {

}

export default MenuWrapper
