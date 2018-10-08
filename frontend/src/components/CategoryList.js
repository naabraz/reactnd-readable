import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleCategoryPosts } from '../actions/posts'
import { handleInitialData } from '../actions/shared'

class CategoryList extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  fetchPostsByCategory = (category) => {
    this.props.dispatch(handleCategoryPosts(category))
  }

  render() {
    return (
      <div>
        <h2>Categories</h2>
        {this.props.categories.map((category) => (
          <li key={category.name}>
            <button onClick={() => this.fetchPostsByCategory(category.name)}>
              {category.name}
            </button>
          </li>
        ))}
      </div>
    )
  }
}

function mapStateToProps({ categories, posts }) {
  return {
    categories,
    posts
  }
}

export default connect(mapStateToProps)(CategoryList)