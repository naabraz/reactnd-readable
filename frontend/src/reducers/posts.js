import { RECEIVE_DATA } from '../actions/shared'
import { RECEIVE_CATEGORY_POSTS } from '../actions/posts'

export default function posts (state = [], action) {
  switch(action.type) {
    case RECEIVE_DATA:
      return action.posts
    case RECEIVE_CATEGORY_POSTS:
      return action.posts
    default:
      return state
  }
}