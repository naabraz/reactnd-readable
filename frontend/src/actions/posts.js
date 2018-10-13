import {
  fetchCategoryPosts,
  fetchPostDetails,
  addNewPost,
} from '../api/posts'

export const RECEIVE_POSTS_BY_CATEGORY = 'RECEIVE_POSTS_BY_CATEGORY'
export const ORDER_POSTS = 'ORDER_POSTS'
export const GET_POST_DETAILS = 'GET_POST_DETAILS'
export const ADD_POST = 'ADD_POST'

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

export function getPostDetails(post) {
  return {
    type: GET_POST_DETAILS,
    post,
  }
}

function addPost(post) {
  return {
    type: ADD_POST,
    post,
  }
}

export function handleReceivePostsByCategory(category) {
  return (dispatch) => {
    fetchCategoryPosts(category)
      .then((posts) => {
        dispatch(receivePostsByCategory(posts))
      })
  }
}

export function handlePostDetails(id) {
  return (dispatch) => {
    fetchPostDetails(id)
      .then((post) => {
        dispatch(getPostDetails(post))
      })
  }
}

export function handleAddPost(post) {
  return (dispatch) => {
    addNewPost(post)
      .then(() => {
        dispatch(addPost(post))
      })
  }
}