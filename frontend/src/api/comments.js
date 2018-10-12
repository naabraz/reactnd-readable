import { headers, url } from './config'

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
    .then(res => console.log(res))
    .then(data => data)

export const removePostComment = (id) =>
  fetch(`${url}/comments/${id}`, {
    method: 'DELETE',
    headers,
  })
    .then(res => console.log(res))
    .then(data => data)