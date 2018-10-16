import * as api from '../api/posts'

export const RECEIVE_POSTS_BY_CATEGORY = 'RECEIVE_POSTS_BY_CATEGORY'
export const ORDER_POSTS = 'ORDER_POSTS'
export const GET_POST_DETAILS = 'GET_POST_DETAILS'
export const ADD_POST = 'ADD_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const UPDATE_VOTE_SCORE = 'UPDATE_VOTE_SCORE'

function receivePostsByCategory(posts) {
  return {
    type: RECEIVE_POSTS_BY_CATEGORY,
    posts,
  }
}

export function orderPosts(posts) {
  return {
    type: ORDER_POSTS,
    posts,
  }
}

export function fetchPostDetails(post) {
  return {
    type: GET_POST_DETAILS,
    post,
  }
}

function removePost(post) {
  return {
    type: REMOVE_POST,
    post,
  }
}

function addPost(post) {
  return {
    type: ADD_POST,
    post,
  }
}

function updatePost(post) {
  return {
    type: UPDATE_POST,
    post
  }
}

function updatePostVoteScore(voteScore) {
  return {
    type: UPDATE_VOTE_SCORE,
    voteScore
  }
}

export function handleReceivePostsByCategory(category) {
  return (dispatch) => {
    api.fetchCategoryPosts(category)
      .then((posts) => {
        dispatch(receivePostsByCategory(posts))
      })
  }
}

export function handlePostDetails(id) {
  return (dispatch) => {
    api.fetchPostDetails(id)
      .then((post) => {
        dispatch(fetchPostDetails(post))
      })
  }
}

export function handleAddPost(post) {
  return (dispatch) => {
    api.addPost(post)
      .then(() => {
        dispatch(addPost(post))
      })
  }
}

export function handleRemovePost(post) {
  return (dispatch) => {
    api.removePost(post.id)
      .then(() => {
        dispatch(removePost(post))
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

export function handleUpdatePostVoteScore(voteScore) {
  return (dispatch) => {
    api.updatePostVoteScore(voteScore)
      .then(() => {
        dispatch(updatePostVoteScore(voteScore))
      })
  }
}