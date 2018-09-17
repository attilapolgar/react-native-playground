import React from 'react'
import { Provider } from 'react-redux'
import { StyleProvider } from 'native-base'
import store from './store'

import getTheme from './theme/native-base-theme/components'
import material from './theme/native-base-theme/variables/material'

import { SplashScreen } from './components'
import AppNavigation from './navigation/app-navigation'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isReady: false
    }
  }
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Provider store={store}>
          {this.state.isReady ? (
            <AppNavigation />
          ) : (
            <SplashScreen onFinish={() => this.setState({ isReady: true })} />
          )}
        </Provider>
      </StyleProvider>
    )
  }
}
