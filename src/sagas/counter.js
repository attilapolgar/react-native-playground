import { delay } from 'redux-saga'
import { put, takeLatest } from 'redux-saga/effects'

import { INCREMENT_COUNTER_ASYNC } from '../action-types'
import { incrementCounter } from '../actions'

function* fetchAllData() {
  try {
    yield delay(1000)
    yield put(incrementCounter())
  } catch (error) {
    // todo
  }
}

export default function* counterSaga() {
  yield takeLatest(INCREMENT_COUNTER_ASYNC, fetchAllData)
}
