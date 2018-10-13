import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { handleInitialData } from '../actions/shared'
import { handleReceivePostsByCategory, orderPosts } from '../actions/posts'

import Post from './Post'
import CategoriesList from './CategoriesList'

class PostsList extends Component {

  componentDidMount () {
    const { dispatch } = this.props
    
    dispatch(handleInitialData())

    if (this.props.match.params.category) {
      const { category } = this.props.match.params
      dispatch(handleReceivePostsByCategory(category))
    }
  }

  orderBy(posts) {
    this.props.dispatch(orderPosts(posts))
  }

  render() {
    const { posts } = this.props

    return (
      <div>
        <button onClick={() => this.orderBy(posts)}>Order by score</button>
        <ul>
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </ul>
        <Link to='/new'>New Post</Link>
        <CategoriesList />	
      </div>
    )
  }
}

function mapStateToProps({ posts }) {
  return {
    posts
  }
}

export default connect(mapStateToProps)(PostsList)