import React, {PropTypes} from 'react'
import Drawer from 'material-ui/Drawer'
import classes from './Sidebar.css'
import Logo from 'universal/components/Logo/Logo'
import MenuContainer from 'universal/modules/layouts/containers/MainLayout/Sidebar/Menu/MenuContainer'

const Sidebar = props => (
  <div>
    <Drawer
      width={300}
      docked={props.isDocked}
      open={props.isOpen}
      onRequestChange={props.layoutActions.toggleDrawer} //eslint-disable-line
    >
      <Logo className={classes.logo}/>
      <MenuContainer/>
    </Drawer>
  </div>
)
Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isDocked: PropTypes.bool.isRequired,
  layoutActions: PropTypes.object.isRequired
}

export default Sidebar
