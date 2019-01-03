import React from 'react'
import { func } from 'prop-types'
import { Button, View } from 'react-native'

const ThemeSelector = ({ switchTheme }) => (
  <View>
    <Button title="dark theme" onPress={() => switchTheme('darkTheme')} />
    <Button title="light theme" onPress={() => switchTheme('lightTheme')} />
  </View>
)

ThemeSelector.propTypes = {
  switchTheme: func.isRequired,
}

export default ThemeSelector
