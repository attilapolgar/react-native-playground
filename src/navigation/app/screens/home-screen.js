import React from 'react'
import { Text } from 'react-native'
import { Counter } from '../../../components'
import { ScreenContainer } from '../../../components'

class HomeScreen extends React.Component {
  render() {
    return (
      <ScreenContainer>
        <Text>Home screen</Text>
        <Counter />
      </ScreenContainer>
    )
  }
}

export default HomeScreen
