import React, {Component, PropTypes} from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import styles from './Auth.css'
import {push} from 'react-router-redux'
import {loginUser, signupUser} from '../../ducks/auth'
import socketOptions from 'universal/utils/socketOptions'
import logo from './logo.png'
import {COLORS} from 'universal/configs'
import Paper from 'material-ui/Paper'

export default class Auth extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    error: PropTypes.any,
    handleSubmit: PropTypes.func,
    submitting: PropTypes.bool,
    params: PropTypes.shape({
      resetToken: PropTypes.string
    }),
    location: PropTypes.shape({
      query: PropTypes.shape({
        e: PropTypes.string,
        next: PropTypes.string
      })
    }),
    isAuthenticating: PropTypes.bool,
    isLogin: PropTypes.bool,
    authError: PropTypes.shape({
      _error: PropTypes.string,
      email: PropTypes.string,
      password: PropTypes.string
    }),
    layoutActions: PropTypes.shape({
      loginUserError: PropTypes.func
    }),
    dispatch: PropTypes.func.isRequired,
    isMobile: PropTypes.bool,
    loginUserError: PropTypes.func
  }

  componentWillMount() {
    const authToken = localStorage.getItem(socketOptions.authTokenName)
    if (authToken) {
      this.props.dispatch(push('/'))
    }
  }

  render() {
    const {
      fields: {email, password},
      handleSubmit,
      isMobile,
      isAuthenticating,
      authError,
      layoutActions: {loginUserError}
    } = this.props

    const localError = authError._error
    /* eslint-disable react/jsx-handler-names*/
    const content = (
      <div>
        <div className={`row ${styles.headingWrapper}`}>
          <h3 className={styles.heading}>
            <img className={styles.logo} src={logo}/> iamaplayer.io
          </h3>
        </div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div className={`row ${styles.inputWrapper}`}>
            <input style={{display: 'none'}} type='text' name='chromeisabitch'/>
            <TextField
              fullWidth
              {...email}
              type='text'
              hintText='name@email.com'
              onBlur={function () {
                loginUserError(null)
              }}
              errorText={email.touched && email.error || localError || ''}
              floatingLabelText='Email'
            />
          </div>
          <div className={`row ${styles.inputWrapper}`}>
            <input style={{display: 'none'}} type='text' name='chromeisabitch'/>
            <TextField
              fullWidth
              {...password}
              type='password'
              floatingLabelText='Password'
              hintText='hunter2'
              errorText={password.touched && password.error || ''}
            />
          </div>
          <div className={`row ${styles.buttonWrapper}`}>
            <RaisedButton
              label='Login'
              type='submit'
              labelColor='#FFFFFF'
              backgroundColor={COLORS.emerald}
              disabled={isAuthenticating}
              onClick={handleSubmit(this.onSubmit)}
            />

          </div>
        </form>
      </div>
    )

    const wrappedContent = (
      <Paper
        style={{
          padding: 30
        }}
      >
        {content}
      </Paper>
    )

    return (
      <div className={`${styles.authForm} col-sm-12 col-md-12 col-lg-12 col-xs-12`}>
        {isMobile ? content : wrappedContent}
      </div>

    )
  }

  onSubmit = (data, dispatch) => {
    // gotta get that redirect from props
    const redirectRoute = this.props.location.query.next || '/'
    const authFunc = this.props.isLogin ? loginUser : signupUser
    return authFunc(dispatch, data, redirectRoute)
  };
}
