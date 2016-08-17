import {connect} from 'react-redux'
import React, {Component, PropTypes} from 'react'
import Header from 'universal/modules/layouts/components/MainLayout/Header/Header'
import {ensureState} from 'redux-optimistic-ui'

@connect(mapStateToProps)
export default class HeaderContainer extends Component {
  render() {
    return <Header {...this.props}/>
  }
}

function mapStateToProps(state) {
  return {
    title: 'iamaplayer.io'
  }
}
