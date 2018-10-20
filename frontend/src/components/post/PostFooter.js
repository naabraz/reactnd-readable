import React from 'react'
import moment from 'moment'

import VoteScore from '../shared/VoteScore'

const PostFooter = ({ post }) => (
  <span className='post-footer'>
    <span>{post.author}</span> | 
    <span>{post.commentCount} comments</span> | 
    <span>{moment(post.timestamp).format('M/D/YYYY')}</span> | 
    <VoteScore initialRating={post.voteScore} data={post} type={'post'} />
  </span>
)

export default PostFooter