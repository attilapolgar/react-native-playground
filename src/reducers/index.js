import { combineReducers } from 'redux'

import counter from '../components/counter/reducer'
import preload from '../components/splash-screen/reducer'

export default combineReducers({
  counter,
  preload,
})
