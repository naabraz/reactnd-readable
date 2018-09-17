import {
  UPDATE_POST_SCORE
} from '../actions'

export default function updatePostScore (state = {}, action) {
  const voteScore = action

  switch (action.type) {
    case UPDATE_POST_SCORE:
      return {
        ...state,
        voteScore: voteScore
      }
    default:
      return state
  }
}