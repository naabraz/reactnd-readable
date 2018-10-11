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
    const { posts, categories } = this.props

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
        <CategoryList categories={categories}/>
      </div>

    )
  }
}

function mapStateToProps({ posts, categories }) {
  return {
    posts,
    categories,
  }
}

export default connect(mapStateToProps)(PostList)