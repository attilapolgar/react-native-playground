import React, { PureComponent } from 'react'
import { object } from 'prop-types'
// import Sentry from 'sentry-expo'

import ErrorBoundaryView from './error-boundary.view'

const propTypes = {
  children: object,
}

class ErrorBoundary extends PureComponent {
  static propTypes = propTypes

  state = { hasError: false }

  componentDidCatch(error, info) {
    console.log('ErrorBoundary :: componentDidCatch', { error, info })
    // Sentry.captureException(error)

    this.setState({ hasError: true })
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props
    return hasError ? <ErrorBoundaryView /> : children
  }
}
export default ErrorBoundary
