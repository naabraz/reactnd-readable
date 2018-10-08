import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleCategoryPosts } from '../actions/posts'
import Post from './Post'

class PostList extends Component {

  componentDidMount () {
    if (this.props.match) {
      const { category } = this.props.match.params
      this.props.dispatch(handleCategoryPosts(category))
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </ul>
      </div>

    )
  }
}

function mapStateToProps({ posts }) {
  return {
    posts
  }
}

export default connect(mapStateToProps)(PostList)