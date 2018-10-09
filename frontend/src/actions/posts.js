import { showLoading, hideLoading } from 'react-redux-loading'

import { fetchPostsByCategory } from '../api/posts'

export const RECEIVE_CATEGORY_POSTS = 'RECEIVE_CATEGORY_POSTS'
export const UPDATE_POST_VOTE_SCORE = 'UPDATE_POST_VOTE_SCORE'

export function receiveCategoryPosts (posts) {
  return {
    type: RECEIVE_CATEGORY_POSTS,
    posts,
  }
}

export function updatePostVoteScore (vote, posts) {
  return {
    type: UPDATE_POST_VOTE_SCORE,
    vote,
    posts,
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