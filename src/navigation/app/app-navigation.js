import { createMaterialTopTabNavigator } from 'react-navigation'
import { SettingsScreen, HomeScreen } from './screens'

const routeConfigs = {
  Home: HomeScreen,
  Settings: SettingsScreen,
}

const tabNavigatorConfig = {
  swipeEnabled: true,
  tabBarPosition: 'bottom',
  initialRouteName: 'Home',
}

export default createMaterialTopTabNavigator(routeConfigs, tabNavigatorConfig)
