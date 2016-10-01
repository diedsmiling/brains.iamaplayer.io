import React, {PropTypes} from 'react'
import {IndexLink, Link} from 'react-router'
import Drawer from 'material-ui/Drawer'
import classes from './Sidebar.css'
import Logo from 'universal/components/Logo/Logo'
const Sidebar = props => (
  <div>
    <Drawer
      width={300}
      docked={props.isDocked}
      open={props.isOpen}
      onRequestChange={props.layoutActions.toggleDrawer} //eslint-disable-line
    >
      <Logo/>
      <IndexLink to='/' activeClassName={classes.activeRoute}>
        Home
      </IndexLink>
      {' · '}
      <Link to='/counter' activeClassName={classes.activeRoute}>
        Counter
      </Link>
    </Drawer>
  </div>
)
Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isDocked: PropTypes.bool.isRequired,
  layoutActions: PropTypes.object.isRequired
}

export default Sidebar
