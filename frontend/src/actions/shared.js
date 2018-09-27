import fetchPosts from '../api/posts'

export const RECEIVE_DATA = 'RECEIVE_DATA'

function receiveData (posts) {
  return {
    type: RECEIVE_DATA,
    posts,
  }
}

export function handleInitialData () {
  return (dispatch) => {
    Promise.all([
      fetchPosts()
    ]).then(([response]) => {
      dispatch(receiveData(response))
    })
  }
}