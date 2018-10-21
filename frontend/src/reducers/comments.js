import {
  GET_POST_COMMENTS,
  ADD_POST_COMMENT,
  REMOVE_POST_COMMENT,
  UPDATE_COMMENT_SCORE,
} from '../actions/comments'

export default function comments(state = [], action) {
  switch(action.type) {
    case GET_POST_COMMENTS:
      return action.comments
    case ADD_POST_COMMENT:
      return state.concat([action.comment])
    case REMOVE_POST_COMMENT:
      return state.filter((comment) => comment.id !== action.comment)
    case UPDATE_COMMENT_SCORE:
      const updatedComment = state.map(comment => {
        if (comment.id === action.voteScore.id) {
            return {
                ...comment,
                voteScore: action.voteScore.option === 'upVote' ? comment.voteScore + 1 : comment.voteScore -1
            }
        }
        return comment
      })
      return updatedComment
    default:
      return state
  }
}