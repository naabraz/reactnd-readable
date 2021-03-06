import {
  RECEIVE_DATA
} from '../actions/shared'

import {
  RECEIVE_POSTS_BY_CATEGORY,
  REMOVE_POST,
  UPDATE_VOTE_SCORE,
} from '../actions/posts'

export default function posts(state = [], action) {
  switch (action.type) {
    case RECEIVE_POSTS_BY_CATEGORY:
      return action.posts
    case REMOVE_POST:
      return [action.post]
    case UPDATE_VOTE_SCORE:
      const updatedPost = state.map(post => {
        if (post.id === action.voteScore.id) {
            return {
                ...post,
                voteScore: action.voteScore.option === 'upVote' ? post.voteScore + 1 : post.voteScore -1
            }
        }
        return post
      })
      return updatedPost
    case RECEIVE_DATA:
      return action.posts
    default:
      return state
  }
}