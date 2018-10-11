import { fetchPostsByCategory, updatePostVoteScore } from '../api/posts'

export const RECEIVE_CATEGORY_POSTS = 'RECEIVE_CATEGORY_POSTS'
export const UPDATE_POST_VOTE_SCORE = 'UPDATE_POST_VOTE_SCORE'

function receiveCategoryPosts (posts, categories) {
  return {
    type: RECEIVE_CATEGORY_POSTS,
    posts,
    categories
  }
}

function postVoteScore (postId, posts) {
  return {
    type: UPDATE_POST_VOTE_SCORE,
    posts: posts.map((post) => post.id === postId ? {...post, voteScore: post.voteScore += 1} : {...post } )
  }
}

export function handleUpdateVoteScore ({ option, id, posts }) {
  return (dispatch) => {
    updatePostVoteScore({ option }, id)
      .then(() => {
        dispatch(postVoteScore(id, posts))
      })
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