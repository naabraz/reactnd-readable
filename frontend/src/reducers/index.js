import { combineReducers } from 'redux'

import { posts } from '../components/post/reducers'

export const Reducers = combineReducers({
  posts,
})