import { showLoading, hideLoading } from 'react-redux-loading'

import * as api from '../api/posts'

export const GET_POST_DETAILS = 'GET_POST_DETAILS'

export function fetchPostDetails(post) {
  return {
    type: GET_POST_DETAILS,
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
