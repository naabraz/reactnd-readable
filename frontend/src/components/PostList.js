import React, { Component } from 'react'
import { connect } from 'react-redux'

import Post from './Post'

class PostList extends Component {

  render() {
    return (
      <ul>
        {this.props.posts.map((post) => (
          <Post post={post} key={post.id}/>
        ))}
      </ul>
    )
  }
}

function mapStateToProps({ posts }) {
  return {
    posts
  }
}

export default connect(mapStateToProps)(PostList)