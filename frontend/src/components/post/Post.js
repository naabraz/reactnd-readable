import React, { Component } from 'react'
import Rating from 'react-rating'
import moment from 'moment'

import './Post.css'

class Post extends Component {

  render() {
    const { title, timestamp, author, commentCount, voteScore } = this.props.post

    return (
      <div className="post">
        <h1>{title}</h1>

        <span>
          <strong>Date:</strong> {moment(timestamp).format('MM/DD/YY')}
        </span>

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
            fullSymbol="fas fa-star" />
        </span>
      </div>
    )
  }
}

export default Post