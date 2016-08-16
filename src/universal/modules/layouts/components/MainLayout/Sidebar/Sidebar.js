import React from 'react'
import {IndexLink, Link} from 'react-router'
import Drawer from 'material-ui/Drawer'
import classes from './Sidebar.css'

const Sidebar = () => (
  <div>
    <Drawer>
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

export default Sidebar
