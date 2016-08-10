import LoginLayout from '../modules/layouts/containers/LoginLayoutContainer'

export default function (store) {
  return {
    component: LoginLayout,
    childRoutes: [
      require('./login')(store),
      require('./signup'),
      require('./logout'),
      require('./verifyEmail')
    ]
  }
}
