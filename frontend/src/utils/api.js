const headers = {
  'Accept': 'application/json',
  'Authorization': 123456
}

export const getPosts = () =>
  fetch('http://localhost:3010/posts', { headers })
    .then(res => res.json())
    .then(data => data)

export const getCategories = () =>
  fetch('http://localhost:3010/categories', { headers })
    .then(res => res.json())
    .then(data => data)