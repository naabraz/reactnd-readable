import {
  GET_POST_DETAILS,
  UPDATE_POST,
} from '../actions/post'

import {
  ADD_POST_COMMENT,
  REMOVE_POST_COMMENT,
} from '../actions/comments'

export default function posts(state = {}, action) {
  switch (action.type) {
    case GET_POST_DETAILS:
      return action.post
    case ADD_POST_COMMENT:
      return {
        ...state,
        commentCount: state.commentCount + 1,
      }
    case REMOVE_POST_COMMENT:
      return {
        ...state,
        commentCount: state.commentCount - 1,
      }
    case UPDATE_POST:
      return {
        ...state,
      }
    default:
      return state
  }
}