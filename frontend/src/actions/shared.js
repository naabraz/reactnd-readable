import { fetchPosts } from '../api/posts'
import { fetchCategories } from '../api/categories'
import { receivePosts } from '../actions/posts'
import { receiveCategories } from '../actions/categories'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'nataliabraz'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    Promise.all([
      fetchPosts(),
      fetchCategories(),
    ]).then(([posts, { categories }]) => {
      dispatch(receivePosts(posts))
      dispatch(receiveCategories(categories))
      dispatch(setAuthedUser(AUTHED_ID))
      dispatch(hideLoading())
    })
  }
}