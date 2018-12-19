import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

import { SplashScreen } from './components'
import RootNavigation from './navigation/root-navigation'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isReady: false,
    }
  }
  render() {
    return (
      <Provider store={store}>
        {this.state.isReady ? (
          <RootNavigation />
        ) : (
          <SplashScreen onFinish={() => this.setState({ isReady: true })} />
        )}
      </Provider>
    )
  }
}
