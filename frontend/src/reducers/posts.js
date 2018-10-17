import {
  RECEIVE_DATA
} from '../actions/shared'

import {
  RECEIVE_POSTS_BY_CATEGORY,
  UPDATE_POST,
  REMOVE_POST,
  UPDATE_VOTE_SCORE,
} from '../actions/posts'

export default function posts(state = [], action) {
  switch (action.type) {
    case RECEIVE_POSTS_BY_CATEGORY:
      return action.posts
    case UPDATE_POST:
      return {
        ...state,
      }
    case REMOVE_POST:
      return [action.post]
    case UPDATE_VOTE_SCORE:
      state.filter((post) => post.id === action.voteScore.id)
        .map((post) => post.voteScore = action.voteScore.option === 'upVote' ? post.voteScore + 1 : post.voteScore -1)
      return state
    case RECEIVE_DATA:
      return action.posts
    default:
      return state
  }
}