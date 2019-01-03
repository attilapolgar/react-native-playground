import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import AppStack from './app/app-navigation'
import AuthStack from './auth/auth-navigation'

const stackNavigator = createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  }
)

export default createAppContainer(stackNavigator)
