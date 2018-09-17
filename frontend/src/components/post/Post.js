import React from 'react'
import Rating from 'react-rating'

import './Post.css'

const Post = ({post}) => {
  const { title, author, commentCount, voteScore } = post

  return (
    <div className="post">
      <h1>{title}</h1>

      <span>
        <strong>Author:</strong> {author}
      </span>

      <span>
        <strong>Comments:</strong> {commentCount}
      </span>

      <span>
        <Rating
          initialRating={voteScore}
          emptySymbol="far fa-star"
          fullSymbol="fas fa-star"/>
      </span>
    </div>
  )
}

export default Post