import headers from './headers'

const fetchCategories = () =>
  fetch('http://localhost:3010/categories', {
    headers
  })
  .then(res => res.json())
  .then(data => data)

export default fetchCategories