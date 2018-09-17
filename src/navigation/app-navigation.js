import { createBottomTabNavigator } from 'react-navigation'
import { SettingsScreen, HomeScreen, DemoScreen } from '../screens/app'

export default createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
  Demo: DemoScreen
})
