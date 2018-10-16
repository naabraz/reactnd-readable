import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  handleInitialData,
} from '../actions/shared'

import Post from './Post'
import CategoriesList from './CategoriesList'

class PostsList extends Component {

  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }

  orderBy = () => this.props.posts.sort((a, b) => a.timestamp + b.timestamp)

  render() {
    const { posts } = this.props

    return (
      <div>
        <div className='posts-list'>
          <button onClick={this.orderBy}>Order by score</button>
          <ul>
            {posts.map((post) => (
              <Post post={post} key={post.id} />
            ))}
          </ul>
          <Link to='/new'>New Post</Link>
        </div>
        <CategoriesList />
      </div>
    )
  }
}

function mapStateToProps({ posts }, { match }) {
  const { category } = match.params

  return {
    posts: category ? posts.filter((post) => post.category === category) : posts,
  }
}

export default connect(mapStateToProps)(PostsList)