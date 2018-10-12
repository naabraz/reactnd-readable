import { fetchPostsByCategory } from '../api/posts'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const RECEIVE_POSTS_CATEGORY = 'RECEIVE_POSTS_CATEGORY'

export function receiveCategories (categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories,
  }
}

function receiveCategoryPosts (posts, categories) {
  return {
    type: RECEIVE_POSTS_CATEGORY,
    posts,
    categories
  }
}

export function handleCategoryPosts (category) {
  return (dispatch) => {
    fetchPostsByCategory(category)
      .then((posts) => {
        dispatch(receiveCategoryPosts(posts))
      })
  }
}
