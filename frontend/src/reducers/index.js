import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'

import posts from './posts'
import post from './post'
import categories from './categories'
import comments from './comments'

export default combineReducers({
  posts,
  post,
  categories,
  comments,
  loadingBar: loadingBarReducer,
})