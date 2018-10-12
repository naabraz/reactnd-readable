import { updatePostVoteScore } from '../api/posts'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const UPDATE_POST_VOTE_SCORE = 'UPDATE_POST_VOTE_SCORE'

export function receivePosts (posts) {
  return {
    type: RECEIVE_POSTS,
    posts,
  }
}

function postVoteScore (postId, posts) {
  return {
    type: UPDATE_POST_VOTE_SCORE,
    posts: posts.map((post) => post.id === postId ? {...post, voteScore: post.voteScore += 1} : {...post } )
  }
}

export function handleUpdateVoteScore ({ option, id, posts }) {
  return (dispatch) => {
    updatePostVoteScore({ option }, id)
      .then(() => {
        dispatch(postVoteScore(id, posts))
      })
  }
}