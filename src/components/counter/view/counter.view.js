import React from 'react'

import { connect } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'

import { number, bool, func, object } from 'prop-types'
import { Button, ActivityIndicator } from 'react-native'
import { colors, palette } from '../../../styles'

const Padded = styled.View`
  padding-top: 10;
  padding-bottom: 10;
  padding-left: 10;
  padding-right: 10;
`

const Container = styled.View`
  elevation: 10;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
`

const Header = styled.View`
  background-color: ${props => props.theme.PRIMARY_COLOR};
`

const Body = styled.View``

const Footer = styled.View`
  align-items: center;
  background-color: ${props => props.theme.PRIMARY_COLOR};
`

const HeaderText = styled.Text`
  font-size: ${props => props.theme.FONT_SIZE_EXTRA_LARGE};
  color: ${props => props.theme.PRIMARY_FOREGROUND_COLOR};
`

const FooterText = styled.Text`
  font-size: ${props => props.theme.FONT_SIZE_SMALL};
  color: ${props => props.theme.PRIMARY_FOREGROUND_COLOR};
`

const CounterValueContainer = styled.View`
  justify-content: center;
  align-items: center;
`

const CounterValueText = styled.Text`
  font-size: ${props => props.theme.FONT_SIZE_MASSIVE};
  font-weight: bold;
`

const CounterButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`

const CounterView = ({
  value,
  pending,
  onIncrement,
  onDecrement,
  onIncrementAsync,
  theme,
}) => (
  <ThemeProvider theme={theme}>
    <Container>
      <Header>
        <Padded>
          <HeaderText>Buggy counter: fails at 5</HeaderText>
        </Padded>
      </Header>
      <Body>
        <Padded>
          <CounterValueContainer>
            <Padded>
              {pending ? (
                <ActivityIndicator color={colors.brand} />
              ) : (
                <CounterValueText>{value}</CounterValueText>
              )}
            </Padded>
          </CounterValueContainer>
          <CounterButtonContainer>
            <Button
              title="-"
              disabled={pending}
              onPress={onDecrement}
              color={palette.button}
            />
            <Button
              disabled={pending}
              title="async+"
              onPress={onIncrementAsync}
              color={palette.button}
            />
            <Button
              title="+"
              disabled={pending}
              onPress={onIncrement}
              color={palette.button}
            />
          </CounterButtonContainer>
        </Padded>
      </Body>
      <Footer>
        <Padded>
          <FooterText>guarded by ErrorBoundary</FooterText>
        </Padded>
      </Footer>
    </Container>
  </ThemeProvider>
)

CounterView.propTypes = {
  value: number.isRequired,
  pending: bool,
  onIncrement: func.isRequired,
  onDecrement: func.isRequired,
  onIncrementAsync: func,
  theme: object.isRequired,
}

CounterView.defaultProps = {
  value: 0,
  pending: false,
  onIncrement: () => null,
  onDecrement: () => null,
  onIncrementAsync: () => null,
}

const mapStateToProps = state => ({
  theme: state.theme.theme,
})

export default connect(mapStateToProps)(CounterView)
