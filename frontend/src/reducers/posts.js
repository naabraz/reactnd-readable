import { 
  RECEIVE_POSTS, 
  UPDATE_POST_VOTE_SCORE 
} from '../actions/posts'

export default function posts (state = [], action) {
  switch(action.type) {
    case RECEIVE_POSTS:
      return action.posts
    case UPDATE_POST_VOTE_SCORE:
      return action.posts
    default:
      return state
  }
}