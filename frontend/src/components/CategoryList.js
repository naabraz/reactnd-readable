import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleCategoryPosts } from '../actions/categories'

class CategoryList extends Component {
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

function mapStateToProps({ posts, categories }) {
  return {
    posts,
    categories
  }
}

export default connect(mapStateToProps)(CategoryList)