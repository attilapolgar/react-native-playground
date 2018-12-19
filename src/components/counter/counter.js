import React, { PureComponent } from 'react'
import CounterView from './counter.view'

class Counter extends PureComponent {
  handleIncrement = () => {
    this.props.increment()
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
    }
    return <CounterView {...props} />
  }
}

export default Counter
