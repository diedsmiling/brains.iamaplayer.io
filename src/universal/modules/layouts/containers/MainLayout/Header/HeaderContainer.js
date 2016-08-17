import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import React, {Component} from 'react'
import Header from 'universal/modules/layouts/components/MainLayout/Header/Header'
import {layoutActions} from 'universal/modules/layouts/ducks/layout'

@connect(mapStateToProps, mapDispatchToProps)
export default class HeaderContainer extends Component {
  render() {
    return <Header {...this.props}/>
  }
}

function mapStateToProps() {
  return {
    title: 'iamaplayer.io'
  }
}

function mapDispatchToProps(dispatch) {
  return {
    layoutActions: bindActionCreators({...layoutActions}, dispatch),
    dispatch
  }
}
