import React from 'react'
import { object } from 'prop-types'
import { Text, Button } from 'react-native'
import { ScreenContainer } from '../../components'

const propTypes = {
  navigation: object.isRequired,
}

class LoginScreen extends React.Component {
  static propTypes = propTypes

  signIn = () => {
    this.props.navigation.navigate('App')
  }

  render() {
    return (
      <ScreenContainer>
        <Text>Login</Text>
        <Button title="Sign in!" onPress={this.signIn} />
      </ScreenContainer>
    )
  }
}

export default LoginScreen
