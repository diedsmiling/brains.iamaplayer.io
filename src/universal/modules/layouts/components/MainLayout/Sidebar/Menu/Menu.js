import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import classes from './Menu.css'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

const MenuWrapper = props => (
  <div>
    <Menu>
      {
        props.menuItems.map((item, i) => (
          <Link
            key={i}
            className={classes.link}
            to={item.urn}
            activeClassName={classes.active}
          >
            <MenuItem
              leftIcon={item.icon}
              key={item.text}
              primaryText={item.text}
            />
          </Link>
        ))

      }
    </Menu>
  </div>
)

MenuWrapper.propTypes = {
  menuItems: PropTypes.arrayOf({
    text: PropTypes.string,
    urn: PropTypes.string
  })
}

export default MenuWrapper
