import React, { Component } from 'react'
import Rating from 'react-rating'

class Post extends Component {
  render() {
    const { post } = this.props

    return (
      <li>
        <h2>{post.title}</h2>
        <p>Author: {post.author}</p>
        <p>Comments: {post.commentCount}</p>
        <Rating initialRating={post.voteScore} />
      </li>
   )
  }
}

export default Post