import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import PostFooter from '../post/PostFooter'

class Post extends Component {
  render() {
    const { post } = this.props

    return (
      <li>
        <h2>
          <Link to={`/${post.category}/${post.id}`}>{post.title}</Link>
        </h2>
        <PostFooter post={post} />
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