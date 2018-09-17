import React from 'react'
import { Text, View } from 'react-native'

import { DemoComponent } from '../../components'

class DemoScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Demo!</Text>

        <DemoComponent />
      </View>
    )
  }
}

export default DemoScreen
