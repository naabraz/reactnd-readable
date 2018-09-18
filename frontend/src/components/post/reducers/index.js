import {
  SET_POSTS
} from '../actions'

export function posts (state = {}, action) {
  const posts = action.posts

  switch (action.type) {
    case SET_POSTS:
    return {
      posts
    }
    default:
      return state
  }
}