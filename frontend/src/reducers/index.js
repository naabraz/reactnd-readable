import { combineReducers } from 'redux'

import posts from './posts'
import categories from './categories'
import loading from './loading'

export default combineReducers({
  posts,
  categories,
  loading,
})