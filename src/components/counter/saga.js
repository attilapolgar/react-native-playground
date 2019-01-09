import { delay } from 'redux-saga'
import { put, takeLatest } from 'redux-saga/effects'

import { INCREMENT_COUNTER_ASYNC, incrementCounter } from './reducer'

function* incrementAsync() {
  try {
    yield delay(1000)
    yield put(incrementCounter())
  } catch (error) {
    console.warn('incrementAsync', error)
  }
}
export default function* counterSaga() {
  yield takeLatest(INCREMENT_COUNTER_ASYNC, incrementAsync)
}
