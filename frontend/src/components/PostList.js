import React, { Component } from 'react'
import { connect} from 'react-redux'

import { handleCategoryPosts } from '../actions/posts'
import { handleInitialData } from '../actions/shared'
import Post from './Post'
import CategoryList from './CategoryList'

class PostList extends Component {
 
  componentDidMount() {
    if (this.props.match.params.category) {
      const { category } = this.props.match.params
      this.props.dispatch(handleCategoryPosts(category)) 
    } else {
      this.props.dispatch(handleInitialData()) 
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