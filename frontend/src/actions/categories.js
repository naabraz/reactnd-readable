import {
  fetchCategories
} from '../api/categories'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

function receiveCategories(categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  }
}

export function handleFetchCategories() {
  return (dispatch) => {
    fetchCategories()
      .then(({categories}) => {
        dispatch(receiveCategories(categories))
      })
  }
}