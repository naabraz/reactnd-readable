import { RECEIVE_DATA } from '../actions/shared'
import { RECEIVE_POSTS_BY_CATEGORY } from '../actions/posts'

export default function posts (state = [], action) {
  switch(action.type) {
    case RECEIVE_POSTS_BY_CATEGORY:
    return action.posts
    case RECEIVE_DATA:
      return action.posts
    default:
      return state
  }
}