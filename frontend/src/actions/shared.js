import { fetchPosts } from '../api/posts'
import { fetchCategories } from '../api/categories'

export const RECEIVE_DATA = 'RECEIVE_DATA'

function receiveInitialData (posts, categories) {
  return {
    type: RECEIVE_DATA,
    posts,
    categories,
  }
}

export function handleInitialData () {
  return (dispatch) => {
    Promise.all([
      fetchPosts(),
      fetchCategories(),
    ]).then(([posts, { categories }]) => {
      dispatch(receiveInitialData(posts, categories))
    })
  }
}