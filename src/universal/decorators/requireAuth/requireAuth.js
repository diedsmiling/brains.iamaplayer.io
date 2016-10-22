import React, {PropTypes, Component} from 'react'
import {push} from 'react-router-redux'
import socketOptions from 'universal/utils/socketOptions'

const isLoginUrl = location => location.pathname === '/login'

export default ComposedComponent => {
  return class RequiredAuth extends Component {
    static propTypes = {
      isAuthenticated: PropTypes.bool,
      dispatch: PropTypes.func,
      hasAuthError: PropTypes.bool,
      location: PropTypes.shape({
        query: PropTypes.shape({
          e: PropTypes.string,
          next: PropTypes.string
        })
      })
    }

    componentWillMount() {
      this.checkForAuth(this.props)
    }

    componentWillReceiveProps(nextProps) {
      this.checkForAuth(nextProps)
    }

    render() {
      const {isAuthenticated, location} = this.props
      if (isAuthenticated || isLoginUrl(location.pathname)) {
        return <ComposedComponent {...this.props}/>
      }
      return <div>Logging in...</div>
    }

    checkForAuth(props) {
      if (__CLIENT__) {
        const {dispatch, hasAuthError, location} = props
        const authToken = localStorage.getItem(socketOptions.authTokenName)
        if ((hasAuthError || !authToken) && !isLoginUrl(location.pathname)) {
          dispatch(push('/login'))
        }
      }
    }
  }
}
