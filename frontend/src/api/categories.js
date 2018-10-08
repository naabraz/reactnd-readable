import headers from './headers'

export const fetchCategories = () =>
  fetch('http://localhost:3010/categories', {
    headers
  })
  .then(res => res.json())
  .then(data => data)