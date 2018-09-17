export const UPDATE_POST_SCORE = 'UPDATE_POST_SCORE'

export const updateScore = (voteScore) => {
  return {
    type: UPDATE_POST_SCORE,
    voteScore
  }
}