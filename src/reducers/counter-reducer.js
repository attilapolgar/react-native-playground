import { INCREMENT_COUNTER, INCREMENT_COUNTER_ASYNC } from '../action-types'

const defaultState = {
  value: 0,
  pending: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER: {
      return {
        ...state,
        value: state.value + 1
      }
    }

    case INCREMENT_COUNTER_ASYNC: {
      return {
        ...state,
        pending: true
      }
    }

    default:
      return state
  }
}
