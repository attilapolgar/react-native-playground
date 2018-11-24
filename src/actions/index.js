import { INCREMENT_COUNTER, INCREMENT_COUNTER_ASYNC } from '../action-types'

export const incrementCounter = () => ({
  type: INCREMENT_COUNTER,
})

export const incrementCounterAsync = () => ({
  type: INCREMENT_COUNTER_ASYNC,
})
