import { combineReducers } from 'redux'

import { posts } from '../components/post/reducers'

const rootReducer = combineReducers({
  posts,
})

export default rootReducer