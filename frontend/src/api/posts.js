const headers = {
  'Accept': 'application/json',
  'Authorization': 123456
}

const fetchPosts = () =>
  fetch('http://localhost:3010/posts', {
    headers
  })
  .then(res => res.json())
  .then(data => data)

export default fetchPosts