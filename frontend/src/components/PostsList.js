import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  handleInitialData,
} from '../actions/shared'

import Post from './Post'
import CategoriesList from './CategoriesList'
import ContentNotFound from './ContentNotFound'

class PostsList extends Component {

  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }

  state = {
    order: false
  }

  render() {
    const { posts } = this.props

   if (this.state.order) posts.sort((a, b) => a.timestamp + b.timestamp)

    return (
      <div>
        {posts.length === 0 ?
          <ContentNotFound /> :
          <div className='posts-list'>
            <a className='link-order' onClick={() => this.setState({order: true})}>Order posts by date</a>
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