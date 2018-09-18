export const SET_POSTS = 'SET_POSTS'

export const posts = (posts) => {
  return {
    type: SET_POSTS,
    posts
  }
}