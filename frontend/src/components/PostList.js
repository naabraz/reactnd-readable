import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleInitialData } from '../actions/shared'
import { handleReceivePostsByCategory } from '../actions/posts'

import Post from './Post'
import CategoryList from './CategoryList'

class PostList extends Component {

  componentDidMount () {
    const { dispatch } = this.props
    
    dispatch(handleInitialData())

    if (this.props.match.params.category) {
      const { category } = this.props.match.params
      dispatch(handleReceivePostsByCategory(category))
    }
  }

  render() {

    const { posts } = this.props

    return (
      <div>
        <ul>
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </ul>
        <button>
          Add new post
        </button>
        <CategoryList />	
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