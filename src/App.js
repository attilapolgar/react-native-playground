import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import store from './store'

import { SplashScreen, OfflineNotice } from './components'
import RootNavigation from './navigation/root-navigation'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isReady: false,
    }
  }

  render() {
    const { isReady } = this.state
    return (
      <Provider store={store}>
        <Fragment>
          {isReady ? (
            <RootNavigation />
          ) : (
            <SplashScreen onFinish={() => this.setState({ isReady: true })} />
          )}
          <OfflineNotice />
        </Fragment>
      </Provider>
    )
  }
}
