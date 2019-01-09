import React, { PureComponent } from 'react'
import { number, bool, func } from 'prop-types'
import CounterView from './view/counter.view'

const propTypes = {
  value: number.isRequired,
  pending: bool.isRequired,
  increment: func.isRequired,
  incrementAsync: func.isRequired,
  decrement: func.isRequired,
}

class Counter extends PureComponent {
  static propTypes = propTypes

  handleIncrement = () => {
    const { increment } = this.props
    increment()
  }

  handleIncrementAsync = () => {
    const { incrementAsync } = this.props
    incrementAsync()
  }

  handleDecrement = () => {
    const { decrement } = this.props
    decrement()
  }

  render() {
    const { value, pending } = this.props
    if (value === 5) {
      throw new Error('I crashed')
    }
    const props = {
      value,
      pending,
      onIncrement: this.handleIncrement,
      onDecrement: this.handleDecrement,
      onIncrementAsync: this.handleIncrementAsync,
    }
    return <CounterView {...props} />
  }
}

export default Counter
