import { RECEIVE_DATA } from '../actions/shared'

export default function categories (state = [], action) {
  switch(action.type) {
    case RECEIVE_DATA:
      return action.categories
    default:
      return state
  }
}