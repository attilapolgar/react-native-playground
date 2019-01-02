import { createBottomTabNavigator } from 'react-navigation'
import { SettingsScreen, HomeScreen } from './screens'

const Home = {
  screen: HomeScreen,
  navigationOptions: {
    title: 'Home',
    headerMode: 'screen',
  },
}

const Settings = { screen: SettingsScreen }

const routeConfigs = {
  Home,
  Settings,
}

const tabNavigatorConfig = {
  initialRouteName: 'Home',
}

export default createBottomTabNavigator(routeConfigs, tabNavigatorConfig)
