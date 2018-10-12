import { headers, url } from './config'

export const fetchPostComments = (id) => 
  fetch(`${url}/posts/${id}/comments`, {
    headers
  })
    .then(res => res.json())
    .then(data => data)