import { combineReducers } from 'redux'

import usersReducer from './usersReducer'
import pinsReducer from './pinsReducer'

// Use ES6 object literal shorthand syntax to define the object shape
const rootReducer = combineReducers({
  usersReducer,
  pinsReducer,
})

export default rootReducer