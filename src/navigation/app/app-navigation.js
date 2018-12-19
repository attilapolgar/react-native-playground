import { createBottomTabNavigator } from 'react-navigation'
import { SettingsScreen, HomeScreen } from './screens'

const routeConfigs = {
  Home: HomeScreen,
  Settings: SettingsScreen,
}

const tabNavigatorConfig = {
  initialRouteName: 'Home',
}

export default createBottomTabNavigator(routeConfigs, tabNavigatorConfig)
