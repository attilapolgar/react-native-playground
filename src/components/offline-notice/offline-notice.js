import React, { PureComponent } from 'react'
import { NetInfo } from 'react-native'

import MiniOfflineSign from './mini-offline-sign'

class OfflineNotice extends PureComponent {
  state = {
    isConnected: true,
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      this.handleConnectivityChange
    )
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      'connectionChange',
      this.handleConnectivityChange
    )
  }

  handleConnectivityChange = isConnected => {
    this.setState({ isConnected })
  }

  render() {
    return this.state.isConnected ? null : <MiniOfflineSign />
  }
}

export default OfflineNotice
