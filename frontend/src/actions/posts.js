import { fetchCategoryPosts, fetchPostDetails } from '../api/posts'

export const RECEIVE_POSTS_BY_CATEGORY = 'RECEIVE_POSTS_BY_CATEGORY'
export const ORDER_POSTS = 'ORDER_POSTS'
export const GET_POST_DETAILS = 'GET_POST_DETAILS'

function receivePostsByCategory (posts) {
  return {
    type: RECEIVE_POSTS_BY_CATEGORY,
    posts,
  }
}

export function orderPosts (posts) {
  return {
    type: ORDER_POSTS,
    posts,
  }
}

export function getPostDetails (post) {
  return {
    type: GET_POST_DETAILS,
    post,
  }
}

export function handleReceivePostsByCategory (category) {
  return (dispatch) => {
    fetchCategoryPosts(category)
      .then((posts) => {
        dispatch(receivePostsByCategory(posts))
      })
  }
}

export function handlePostDetails (id) {
  return (dispatch) => {
    fetchPostDetails(id)
      .then((post) => {
        dispatch(getPostDetails(post))
      })
  }
}