import React, { Component } from 'react'
import { connect } from 'react-redux'

class CategoryList extends Component {
  render() {
    return (
      <div>
        <h2>Categories</h2>
        {this.props.categories.map((category) => (
          <li key={category.name}>
            <a href={category.path}>{category.name}</a>
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