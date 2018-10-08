import { showLoading, hideLoading } from 'react-redux-loading'

import { fetchPostsByCategory } from '../api/posts'

export const RECEIVE_CATEGORY_POSTS = 'RECEIVE_CATEGORY_POSTS'

export function receiveCategoryPosts (posts) {
  return {
    type: RECEIVE_CATEGORY_POSTS,
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