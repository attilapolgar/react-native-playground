import React from 'react'
import { View, Text } from 'react-native'
import { Counter } from '../../../components'

class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Home screen</Text>
        <Counter />
      </View>
    )
  }
}

export default HomeScreen
