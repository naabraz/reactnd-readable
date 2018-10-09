import { headers, url } from './config'

export const fetchPosts = () =>
  fetch(`${url}/posts`, {
    headers
  })
  .then(res => res.json())
  .then(data => data)

export const fetchPostsByCategory = (category) =>
  fetch(`${url}${category}/posts`, {
    headers
  })
  .then(res => res.json())
  .then(data => data)

export const updatePostVoteScore = (vote) =>
  fetch(`${url}/${vote}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(vote)
  })
