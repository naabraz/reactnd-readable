import {
  RECEIVE_DATA
} from '../actions/shared'

import {
  RECEIVE_POSTS_BY_CATEGORY,
  ORDER_POSTS,
  GET_POST_DETAILS,
  UPDATE_POST,
  REMOVE_POST,
  UPDATE_VOTE_SCORE,
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
    case REMOVE_POST:
      return action.post
    case UPDATE_VOTE_SCORE:
      state.filter((post) => post.id === action.voteScore.id).map((post) => post.voteScore = action.voteScore.newValue)
      return state
    case RECEIVE_DATA:
      return action.posts
    default:
      return state
  }
}