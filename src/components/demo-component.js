import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Text, Button } from 'native-base'
import { connect } from 'react-redux'

import { incrementCounter, incrementCounterAsync } from '../actions'

const DemoComponent = ({ value, onIncrement, onIncrementAsync }) => (
  <View>
    <Text>
      this is a demo component. You can use this to try things quickly
    </Text>

    <Text>{value}</Text>
    <Button onPress={onIncrement}>
      <Text>+</Text>
    </Button>
    <Button onPress={onIncrementAsync}>
      <Text>async +</Text>
    </Button>
  </View>
)

const mapStateToProps = state => ({
  value: state.counter.value
})

const mapDispatchToProps = dispatch => ({
  onIncrement: payload => dispatch(incrementCounter(payload)),
  onIncrementAsync: payload => dispatch(incrementCounterAsync(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DemoComponent)
