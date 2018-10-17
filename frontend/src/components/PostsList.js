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
        {posts.length === 0 ?
          <div>
            <p>There is no posts to show :(</p>
          </div> :
          <div className='posts-list'>
            <Link to={''} onClick={this.orderBy}>Order posts by score</Link>
            <ul>
              {posts.map((post) => (
                <Post post={post} key={post.id} />
              ))}
            </ul>
          </div>
        }
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