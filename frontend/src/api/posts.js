import { headers, url } from './config'

export const fetchPosts = () =>
  fetch(`${url}/posts`, {
    headers
  })
  .then(res => res.json())
  .then(data => data)

export const fetchPostsByCategory = (category) =>
  fetch(`${url}/${category}/posts`, {
    headers
  })
  .then(res => res.json())
  .then(data => data)

export const updatePostVoteScore = (vote, id) => {
  return fetch(`${url}/posts/${id}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(vote)
  })
}

