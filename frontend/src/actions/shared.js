import { fetchPosts } from '../api/posts'
import { fetchCategories } from '../api/categories'

export const RECEIVE_DATA = 'RECEIVE_DATA'

function receiveData (posts, categories) {
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
      fetchCategories()
    ]).then(([posts, { categories }]) => {
      dispatch(receiveData(posts, categories))
    })
  }
}