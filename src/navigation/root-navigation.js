import { createSwitchNavigator } from 'react-navigation'
import AppStack from './app/app-navigation'
import AuthStack from './auth/auth-navigation'

export default createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'App'
  }
)
