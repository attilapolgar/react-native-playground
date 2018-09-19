import { createMaterialTopTabNavigator } from 'react-navigation'
import { SettingsScreen, HomeScreen, DemoScreen } from './screens'

const routeConfigs = {
  Home: HomeScreen,
  Settings: SettingsScreen,
  Demo: DemoScreen
}

const tabNavigatorConfig = {
  swipeEnabled: true,
  tabBarPosition: 'bottom'
}

export default createMaterialTopTabNavigator(routeConfigs, tabNavigatorConfig)
