import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  handleInitialData,
} from '../../actions/shared'

import Post from './Post'
import CategoriesList from '../shared/CategoriesList'
import NotFound from '../shared/NotFound'

class PostsList extends Component {

  componentDidMount () {
    this.props.fetchPosts()
  }

  state = {
    order: false
  }

  render() {
    const { posts } = this.props
    const sortedPosts = !this.state.order ? posts : [...posts].sort((a, b) => a.timestamp + b.timestamp)

    return (
      <div>
        {sortedPosts.length === 0 ?
          <NotFound type={'postsList'}/> :
          <div className='posts-list'>
            <a className='link-order' onClick={() => this.setState((state) => ({order: !state.order}))}>Order posts by date</a>
            <ul>
              {sortedPosts.map((post) => (
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

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(handleInitialData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)