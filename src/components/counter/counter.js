import React, { PureComponent } from 'react'
import CounterView from './view/counter.view'

class Counter extends PureComponent {
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
