import React from 'react'
import {
  Counter,
  ScreenContainer,
  ErrorBoundary,
  ThemeSelector,
} from '../../../components'

const HomeScreen = () => (
  <ScreenContainer>
    <ErrorBoundary>
      <Counter />
    </ErrorBoundary>
    <ThemeSelector />
  </ScreenContainer>
)

export default HomeScreen
