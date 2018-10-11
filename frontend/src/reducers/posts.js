import { RECEIVE_DATA } from '../actions/shared'
import { RECEIVE_CATEGORY_POSTS } from '../actions/posts'
import { UPDATE_POST_VOTE_SCORE } from '../actions/posts'

export default function posts (state = [], action) {
  switch(action.type) {
    case RECEIVE_DATA:
      return {
        ...state,
      }, action.posts
    case RECEIVE_CATEGORY_POSTS:
      return action.posts
    case UPDATE_POST_VOTE_SCORE:
      return action.posts
    default:
      return state
  }
}