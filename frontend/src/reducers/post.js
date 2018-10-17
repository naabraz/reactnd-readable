import {
  GET_POST_DETAILS,
} from '../actions/posts'

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
    default:
      return state
  }
}