import React, { PureComponent } from 'react'
import { func, bool } from 'prop-types'
import { NetInfo } from 'react-native'

import MiniOfflineSign from './mini-offline-sign'

const propTypes = {
  render: func,
  renderWhenOnline: bool,
}

const defaultProps = {
  renderWhenOnline: false,
  render: null,
}

class OfflineNotice extends PureComponent {
  static propTypes = propTypes

  static defaultProps = defaultProps

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

  renderOfflineSign = () => {
    const { render } = this.props
    const { isConnected } = this.state
    return render ? (
      render({ isConnected })
    ) : (
      <MiniOfflineSign isConnected={isConnected} />
    )
  }

  render() {
    const { renderWhenOnline } = this.props
    const { isConnected } = this.state
    return isConnected && !renderWhenOnline ? null : this.renderOfflineSign()
  }
}

export default OfflineNotice
