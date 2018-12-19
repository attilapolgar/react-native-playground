import { createActions, handleActions } from 'redux-actions'

const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
const INCREMENT_COUNTER_ASYNC = 'INCREMENT_COUNTER_ASYNC'

const defaultState = {
  value: 0,
  pending: false,
}

export const {
  incrementCounter,
  incrementCounterAsync,
  decrementCounter,
} = createActions(
  {},
  INCREMENT_COUNTER,
  INCREMENT_COUNTER_ASYNC,
  DECREMENT_COUNTER
)

export default handleActions(
  {
    [INCREMENT_COUNTER]: state => ({
      ...state,
      value: state.value + 1,
    }),
    [DECREMENT_COUNTER]: state => {
      return {
        ...state,
        value: state.value - 1,
      }
    },
  },
  defaultState
)
