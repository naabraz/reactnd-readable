import {
  headers,
  url,
} from './config'

import { 
  filterDeleted 
} from '../helpers/filterDeleted'

export const fetchPosts = () =>
  fetch(`${url}/posts`, {
    headers,
  })
  .then(res => res.json())
  .then(data => filterDeleted(data))

export const fetchPostDetails = (id) =>
  fetch(`${url}/posts/${id}`, {
    headers
  })
  .then(res => res.json())
  .then(data => data)

export const fetchCategoryPosts = (category) =>
  fetch(`${url}/${category}/posts`, {
    headers,
  })
  .then(res => res.json())
  .then(data => data)

export const addPost = (post) =>
  fetch(`${url}/posts`, {
    method: 'POST',
    headers,
    body: JSON.stringify(post)
  })
  .then(res => res.json())
  .then(data => data)

export const removePost = (id) =>
  fetch(`${url}/posts/${id}`, {
    method: 'DELETE',
    headers,
  })
  .then(res => res.json())
  .then(data => data)

export const updatePost = (post) =>
  fetch(`${url}/posts/${post.id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(post)
  })
  .then(res => res.json())
  .then(data => data)

export const updatePostVoteScore = (vote, id) =>
  fetch(`${url}/posts/${id}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(vote)
  })
  .then(res => res.json())
  .then(data => data)