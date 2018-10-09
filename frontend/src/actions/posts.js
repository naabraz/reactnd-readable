import { showLoading, hideLoading } from 'react-redux-loading'

import { fetchPostsByCategory, updatePostVoteScore } from '../api/posts'

export const RECEIVE_CATEGORY_POSTS = 'RECEIVE_CATEGORY_POSTS'
export const UPDATE_POST_VOTE_SCORE = 'UPDATE_POST_VOTE_SCORE'

function receiveCategoryPosts (posts) {
  return {
    type: RECEIVE_CATEGORY_POSTS,
    posts,
  }
}


function postVoteScore (postId, posts) {
  return {
    type: UPDATE_POST_VOTE_SCORE,
    posts: posts.map((post) => post.id === postId ? {...post, voteScore: post.voteScore += 1} : {...post } )
  }
}

export function handleUpdateVoteScore (voteScore, id, posts) {
  return (dispatch) => {
    dispatch(showLoading())
    updatePostVoteScore(voteScore, id)
      .then(() => {
        dispatch(postVoteScore(id, posts))
        dispatch(hideLoading())
      })
  }
}

export function handleCategoryPosts (category) {
  return (dispatch) => {
    dispatch(showLoading())
    fetchPostsByCategory(category)
      .then((posts) => {
        dispatch(receiveCategoryPosts(posts))
        dispatch(hideLoading())
      })
  }
}