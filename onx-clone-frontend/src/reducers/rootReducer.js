import { combineReducers } from 'redux'

import userReducer from './userReducer'
import pinsReducer from './pinsReducer'

// Use ES6 object literal shorthand syntax to define the object shape
const rootReducer = combineReducers({
  user: userReducer,
  pins: pinsReducer
})

export default rootReducer