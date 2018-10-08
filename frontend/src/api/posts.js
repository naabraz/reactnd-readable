import headers from './headers'

export const fetchPosts = () =>
  fetch('http://localhost:3010/posts', {
    headers
  })
  .then(res => res.json())
  .then(data => data)

export const fetchPostsByCategory = (category) =>
  fetch(`http://localhost:3010/${category}/posts`, {
    headers
  })
  .then(res => res.json())
  .then(data => data)