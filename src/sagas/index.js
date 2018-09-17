import { all } from 'redux-saga/effects'

import counter from './counter'

import preload from '../components/splash-screen/saga'

export default function* rootSaga() {
  yield all([counter(), preload()])
}
