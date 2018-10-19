import {
  headers,
  url,
} from './config'

export const fetchCategories = () =>
  fetch(`${url}/categories`, {
    headers
  })
  .then(res => res.json())
  .then(data => data)
  .catch((e) => new Error(e))