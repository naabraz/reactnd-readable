import React from 'react';

import {
  MdSentimentVeryDissatisfied,
} from 'react-icons/md'

const postNotFound = `OOOPS! The page you're looking for doesn't exist`
const postListEmpty = `We're sorry but no posts were found`

const NotFound = ({ type }) => (
 <span className='content-not-found'>
   <p>{type === 'postsList' ? postListEmpty : postNotFound}</p>
   <MdSentimentVeryDissatisfied className='content-not-found-icon' />
 </span>
)

export default NotFound