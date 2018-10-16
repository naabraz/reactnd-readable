import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import VoteScore from './VoteScore'

class Post extends Component {
  render() {
    const { post } = this.props

    return (
      <li>
        <h2>
          <Link to={`/${post.category}/${post.id}`}>{post.title}</Link>
        </h2>
        <p>Date: {new Date(post.timestamp).toDateString()}</p>
        <VoteScore initialRating={post.voteScore} data={post} />
        <p>
          Author: {post.author} | Comments: {post.commentCount}
        </p>
      </li>
   )
  }
}

function mapStateToProps({ posts }) {
  return {
    posts
  }
}

export default connect(mapStateToProps)(Post)