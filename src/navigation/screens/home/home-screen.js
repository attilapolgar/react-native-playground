import React from 'react'
import { Counter, ScreenContainer, ErrorBoundary } from '../../../components'

class HomeScreen extends React.Component {
  render() {
    return (
      <ScreenContainer>
        <ErrorBoundary>
          <Counter />
        </ErrorBoundary>
      </ScreenContainer>
    )
  }
}

export default HomeScreen
