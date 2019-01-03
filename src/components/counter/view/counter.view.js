import React from 'react'
import { number, bool, func } from 'prop-types'
import { Text, View, Button, ActivityIndicator } from 'react-native'
import styles from './styles'
import { colors } from '../../../styles'

const CounterView = ({
  value,
  pending,
  onIncrement,
  onDecrement,
  onIncrementAsync,
}) => (
  <View style={styles.counter}>
    <Text>Buggy counter: fails at 5</Text>
    <View style={styles.valueContainer}>
      {pending ? (
        <ActivityIndicator color={colors.brand} />
      ) : (
        <Text style={styles.valueText}>{value}</Text>
      )}
    </View>
    <View style={styles.buttonContainer}>
      <Button
        style={styles.button}
        title="-"
        disabled={pending}
        onPress={onDecrement}
        color={colors.brand}
      />
      <Button
        style={styles.button}
        disabled={pending}
        title="async+"
        onPress={onIncrementAsync}
        color={colors.brand}
      />
      <Button
        style={styles.button}
        title="+"
        disabled={pending}
        onPress={onIncrement}
        color={colors.brand}
      />
    </View>
  </View>
)

CounterView.propTypes = {
  value: number.isRequired,
  pending: bool,
  onIncrement: func.isRequired,
  onDecrement: func.isRequired,
  onIncrementAsync: func,
}

CounterView.defaultProps = {
  value: 0,
  pending: false,
  onIncrement: () => null,
  onDecrement: () => null,
  onIncrementAsync: () => null,
}

export default CounterView
