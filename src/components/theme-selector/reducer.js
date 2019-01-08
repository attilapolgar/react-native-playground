import { createActions, handleActions } from 'redux-actions'

import * as theme from './theme'

const SWITCH_THEME = 'SWITCH_THEME'

const defaultState = {
  theme: { ...theme.base, ...theme.darkTheme },
}

export const { switchTheme } = createActions({}, SWITCH_THEME)

export default handleActions(
  {
    [SWITCH_THEME]: (state, action) => ({
      ...state,
      theme: { ...theme.base, ...theme[action.payload] },
    }),
  },
  defaultState
)
