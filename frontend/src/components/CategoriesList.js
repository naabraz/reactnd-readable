import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class CategoriesList extends Component {
  render() {
    const { categories } = this.props

    return (
      <div>
        <h2>Categories</h2>
        {categories.map((category) => (
          <li key={category.name}>
            <Link to={`/${category.name}`}>{category.name}</Link>
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

export default withRouter(connect(mapStateToProps)(CategoriesList))