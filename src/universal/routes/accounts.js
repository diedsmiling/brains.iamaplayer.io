import LoginLayout from '../modules/layouts/containers/LoginLayout/LoginLayoutContainer'

export default function (store) {
  return {
    component: LoginLayout,
    childRoutes: [
      require('./login')(store),
      // require('./signup'),
      require('./logout'),
      require('./verifyEmail')
    ]
  }
}
