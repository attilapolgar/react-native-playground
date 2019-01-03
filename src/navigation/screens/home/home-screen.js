import React from 'react'
import {
  Counter,
  ScreenContainer,
  ErrorBoundary,
  ThemeSelector,
} from '../../../components'

class HomeScreen extends React.Component {
  render() {
    return (
      <ScreenContainer>
        <ErrorBoundary>
          <Counter />
        </ErrorBoundary>
        <ThemeSelector />
      </ScreenContainer>
    )
  }
}

export default HomeScreen
