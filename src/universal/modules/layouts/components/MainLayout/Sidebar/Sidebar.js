import React, {PropTypes} from 'react'
import {IndexLink, Link} from 'react-router'
import Drawer from 'material-ui/Drawer'
import classes from './Sidebar.css'

const Sidebar = (props) => (
  <div>
    <Drawer open={props.isOpen}>
      <h1>iamaplayer.io</h1>
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
  isOpen: PropTypes.bool.isRequired
}
export default Sidebar
