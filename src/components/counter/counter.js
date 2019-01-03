import React, { PureComponent } from 'react'
import { number, bool, func } from 'prop-types'
import CounterView from './view/counter.view'

const propTypes = {
  value: number,
  pending: bool,
  increment: func,
  incrementAsync: func,
  decrement: func,
}

class Counter extends PureComponent {
  static propTypes = propTypes
  handleIncrement = () => {
    this.props.increment()
  }
  handleIncrementAsync = () => {
    this.props.incrementAsync()
  }

  handleDecrement = () => {
    this.props.decrement()
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
