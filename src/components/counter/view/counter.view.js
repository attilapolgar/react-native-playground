import React from 'react'

import { connect } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'

import { number, bool, func, object } from 'prop-types'
import { Button, ActivityIndicator } from 'react-native'
import { Padded, Text } from '../../ui'

const Container = styled.View`
  elevation: ${({ theme }) => theme.ELEVATION};
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.PRIMARY_BACKGROUND_LIGHT};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS};
`

const Header = styled.View`
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  border-top-left-radius: ${({ theme }) => theme.BORDER_RADIUS};
  border-top-right-radius: ${({ theme }) => theme.BORDER_RADIUS};
`

const Body = styled.View``

const Footer = styled.View`
  align-items: center;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  border-bottom-left-radius: ${({ theme }) => theme.BORDER_RADIUS};
  border-bottom-right-radius: ${({ theme }) => theme.BORDER_RADIUS};
`

const FooterText = styled.Text`
  font-size: ${props => props.theme.FONT_SIZE_SMALL};
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
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
          <Text size="large">Buggy counter: fails at 5</Text>
        </Padded>
      </Header>
      <Body>
        <Padded>
          <CounterValueContainer>
            <Padded>
              {pending ? (
                <ActivityIndicator
                  color={theme.SECONDARY_BACKGROUND_COLOR}
                  size="large"
                />
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
              color={theme.SECONDARY_BACKGROUND_COLOR}
            />
            <Button
              disabled={pending}
              title="async+"
              onPress={onIncrementAsync}
              color={theme.SECONDARY_BACKGROUND_COLOR}
            />
            <Button
              title="+"
              disabled={pending}
              onPress={onIncrement}
              color={theme.SECONDARY_BACKGROUND_COLOR}
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
