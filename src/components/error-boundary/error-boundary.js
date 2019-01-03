import React, { PureComponent } from 'react'
import { object } from 'prop-types'
import { Text } from 'react-native'

const propTypes = {
  children: object,
}

class ErrorBoundary extends PureComponent {
  static propTypes = propTypes

  state = { hasError: false }

  componentDidCatch(error, info) {
    console.log('ErrorBoundary :: componentDidCatch', { error, info })
    // logErrorToMyService(error, info);
    this.setState({ hasError: true })
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props
    return hasError ? <Text>⚠️ Something went wrong! ⚠️</Text> : children
  }
}
export default ErrorBoundary
