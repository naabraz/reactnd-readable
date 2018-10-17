import {
  GET_POST_DETAILS,
} from '../actions/posts'

export default function posts(state = {}, action) {
  switch (action.type) {
    case GET_POST_DETAILS:
      return action.post
    default:
      return state
  }
}