import {
  GET_POST_COMMENTS,
  ADD_POST_COMMENT,
  REMOVE_POST_COMMENT
} from '../actions/comments'

export default function comments(state = [], action) {
  switch(action.type) {
    case GET_POST_COMMENTS:
      return action.comments
    case ADD_POST_COMMENT:
      return state.concat([action.comment])
    case REMOVE_POST_COMMENT:
      return state.filter((comment) => comment.id !== action.comment)
    default:
      return state
  }
}