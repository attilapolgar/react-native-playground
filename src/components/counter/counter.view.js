import React from 'react'
import { number, bool, func } from 'prop-types'
import { Text, View, Button } from 'react-native'

const CounterView = ({ value, pending, onIncrement, onDecrement }) => (
  <View>
    {pending ? <Text>loading...</Text> : <Text>{value}</Text>}
    <Button title="+" onPress={onIncrement} />
    <Button title="-" onPress={onDecrement} />
  </View>
)

CounterView.propTypes = {
  value: number.isRequired,
  pending: bool,
  onIncrement: func.isRequired,
  onDecrement: func.isRequired,
}

CounterView.defaultProps = {
  value: 0,
  pending: false,
  onIncrement: () => null,
  onDecrement: () => null,
}

export default CounterView
