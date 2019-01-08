import React from 'react'
import { func } from 'prop-types'
import { Button } from 'react-native'
import styled from 'styled-components'

const Container = styled.View`
  margin-top: 10;
  width: 100%;
  flex-direction: row;
`

const ThemeSelector = ({ switchTheme }) => (
  <Container>
    <Button title="dark theme" onPress={() => switchTheme('darkTheme')} />
    <Button title="light theme" onPress={() => switchTheme('lightTheme')} />
  </Container>
)

ThemeSelector.propTypes = {
  switchTheme: func.isRequired,
}

export default ThemeSelector
