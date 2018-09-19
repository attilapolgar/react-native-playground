import React from 'react'
import { Text, View, Button } from 'react-native'

class LoginScreen extends React.Component {
  _signIn = () => {
    this.props.navigation.navigate('App')
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Login</Text>
        <Button title="Sign in!" onPress={this._signIn} />
      </View>
    )
  }
}

export default LoginScreen
