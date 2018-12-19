import { createStackNavigator } from 'react-navigation'
import { LoginScreen, SignupScreen } from './screens'

const routeConfigs = {
  Login: LoginScreen,
  Signup: SignupScreen,
}

const stackNavigatorConfig = {
  initialRouteName: 'Login',
}

export default createStackNavigator(routeConfigs, stackNavigatorConfig)
