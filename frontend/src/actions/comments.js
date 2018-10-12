import {
  fetchPostComments
} from '../api/comments'

export const GET_POST_COMMENTS = 'GET_POST_COMMENTS'

function getPostComments(comments) {
  return {
    type: GET_POST_COMMENTS,
    comments,
  }
}

export function handlePostComments(id) {
  return (dispatch) => {
    fetchPostComments(id)
      .then((comments) => {
        dispatch(getPostComments(comments))
      })
  }
}