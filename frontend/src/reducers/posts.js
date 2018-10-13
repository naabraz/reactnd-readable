import {
  RECEIVE_DATA
} from '../actions/shared'

import {
  RECEIVE_POSTS_BY_CATEGORY,
  ORDER_POSTS,
  GET_POST_DETAILS,
  UPDATE_POST,
} from '../actions/posts'

export default function posts(state = [], action) {
  switch (action.type) {
    case RECEIVE_POSTS_BY_CATEGORY:
      return action.posts
    case ORDER_POSTS:
      return action.posts.sort((a, b) => a.timestamp + b.timestamp)
    case GET_POST_DETAILS:
      return {
        ...state,
        ...action.post
      }
    case UPDATE_POST:
      return {
        ...state,
      }
    case RECEIVE_DATA:
      return action.posts
    default:
      return state
  }
}