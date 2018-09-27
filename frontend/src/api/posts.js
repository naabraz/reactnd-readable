import headers from './headers'

const fetchPosts = () =>
  fetch('http://localhost:3010/posts', {
    headers
  })
  .then(res => res.json())
  .then(data => data)


export default fetchPosts