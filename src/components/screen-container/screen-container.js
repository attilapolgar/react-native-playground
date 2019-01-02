import React, { PureComponent } from 'react'
import { oneOfType, arrayOf, object } from 'prop-types'
import { SafeAreaView } from 'react-native'
import { ErrorBoundary } from '../'

import styles from './styles'

const propTypes = {
  children: oneOfType([object, arrayOf(object)]),
}

class ScreenContainer extends PureComponent {
  static propTypes = propTypes

  render() {
    const { children } = this.props
    const childrenToRender = Array.isArray(children) ? children : [children]
    return (
      <ErrorBoundary>
        <SafeAreaView style={styles.screenContent}>
          {childrenToRender.map(c => c)}
        </SafeAreaView>
      </ErrorBoundary>
    )
  }
}
export default ScreenContainer
