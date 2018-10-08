import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class CategoryList extends Component {
  render() {
    return (
      <div>
        <h2>Categories</h2>
        {this.props.categories.map((category) => (
          <li key={category.name}>
          <Link to={`/${category.path}`}>
            {category.name}
          </Link>
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