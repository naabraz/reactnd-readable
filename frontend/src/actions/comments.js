import * as api from '../api/comments'

export const GET_POST_COMMENTS = 'GET_POST_COMMENTS'
export const ADD_POST_COMMENT = 'ADD_POST_COMMENT'
export const REMOVE_POST_COMMENT = 'REMOVE_POST_COMMENT'
export const EDIT_POST_COMMENT = 'EDIT_POST_COMMENT'
export const UPDATE_COMMENT_SCORE = 'UPDATE_COMMENT_SCORE'

function getPostComments(comments) {
  return {
    type: GET_POST_COMMENTS,
    comments,
  }
}

function addComment(comment) {
  return {
    type: ADD_POST_COMMENT,
    comment: {
      ...comment,
      voteScore: 0
    }
  }
}

function removeComment(comment) {
  return {
    type: REMOVE_POST_COMMENT,
    comment,
  }
}

function editComment(comment) {
  return {
    type: EDIT_POST_COMMENT,
    comment,
  }
}

function updateCommentScore(voteScore) {
  return {
    type: UPDATE_COMMENT_SCORE,
    voteScore,
  }
}

export function handlePostComments(id) {
  return (dispatch) => {
    api.fetchPostComments(id)
      .then((comments) => {
        dispatch(getPostComments(comments))
      })
  }
}

export function handleAddPostComment(comment) {
  return (dispatch) => {
    api.addPostComment(comment)
      .then(() => {
        dispatch(addComment(comment))
      })
  }
}

export function handleRemovePostComment(comment) {
  return (dispatch) => {
    api.removePostComment(comment)
      .then(() => {
        dispatch(removeComment(comment))
      })
  }
}

export function handleEditPostComment(comment) {
  return (dispatch) => {
    api.editPostComment(comment)
      .catch(() => {
        dispatch(editComment(comment))
      })
  }
}

export function handleUpdateCommentScore(voteScore) {
  return (dispatch) => {
    api.updateCommentScore(voteScore)
      .then(() => {
        dispatch(updateCommentScore(voteScore))
      })
  }
}