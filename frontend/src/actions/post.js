import { showLoading, hideLoading } from 'react-redux-loading'

import * as api from '../api/posts'

export const GET_POST_DETAILS = 'GET_POST_DETAILS'
export const UPDATE_POST = 'UPDATE_POST'

export function fetchPostDetails(post) {
  return {
    type: GET_POST_DETAILS,
    post,
  }
}

function updatePost(post) {
  return {
    type: UPDATE_POST,
    post,
  }
}

export function handlePostDetails(id) {
  return (dispatch) => {
    dispatch(showLoading())
    api.fetchPostDetails(id)
      .then((post) => {
        dispatch(fetchPostDetails(post))
        dispatch(hideLoading())
      })
  }
}

export function handleUpdatePost(post) {
  return (dispatch) => {
    api.updatePost(post)
      .then(() => {
        dispatch(updatePost(post))
      })
  }
}
