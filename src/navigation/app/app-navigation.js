import { createDrawerNavigator } from 'react-navigation'
import { SettingsScreen, HomeScreen } from '../screens'

const Home = {
  screen: HomeScreen,
  defaultNavigationOptions: {
    title: 'Home',
    headerMode: 'screen',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#000',
    },
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

export default createDrawerNavigator(routeConfigs, tabNavigatorConfig)
