import { connect } from 'react-redux'

import Component from './counter'
import { incrementCounter, decrementCounter } from './reducer'

const mapStateToProps = state => ({
  value: state.counter.value,
  pending: state.counter.pending,
})

const mapDispatchToProps = {
  increment: incrementCounter,
  decrement: decrementCounter,
}

const Counter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default Counter
