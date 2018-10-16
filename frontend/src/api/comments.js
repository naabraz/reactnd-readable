import {
  headers,
  url
} from './config'

export const fetchPostComments = (id) =>
  fetch(`${url}/posts/${id}/comments`, {
    headers
  })
  .then(res => res.json())
  .then(data => data)

export const addPostComment = (comment) =>
  fetch(`${url}/comments/`, {
    method: 'POST',
    headers,
    body: JSON.stringify(comment)
  })
  .then(res => res.json())
  .then(data => data)

export const removePostComment = (id) =>
  fetch(`${url}/comments/${id}`, {
    method: 'DELETE',
    headers,
  })
  .then(res => res.json())
  .then(data => data)

export const editPostComment = (comment) =>
  fetch(`${url}/comments/${comment.id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(comment)
  })
  .then(res => res.json())
  .then(data => data)