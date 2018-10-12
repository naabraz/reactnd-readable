import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class CategoryList extends Component {
  fetchPostsByCategory = (category) => {
    console.log(category)
  }

  render() {
    const { categories } = this.props

    return (
      <div>
        <h2>Categories</h2>
        {categories.map((category) => (
          <li key={category.name}>
            <Link to={`/${category.name}`}>{category.name}</Link>
            <button onClick={() => this.fetchPostsByCategory(category.name)}>
              {category.name}
            </button>
          </li>
        ))}
      </div>
    )
  }
}

function mapStateToProps({ categories }) {
  return {
    categories
  }
}

export default connect(mapStateToProps)(CategoryList)