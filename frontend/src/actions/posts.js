import { fetchCategoryPosts } from '../api/posts'

export const RECEIVE_POSTS_BY_CATEGORY = 'RECEIVE_POSTS_BY_CATEGORY'
export const ORDER_POSTS = 'ORDER_POSTS'

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

export function handleReceivePostsByCategory (category) {
  return (dispatch) => {
    fetchCategoryPosts(category)
      .then((posts) => {
        dispatch(receivePostsByCategory(posts))
      })
  }
}