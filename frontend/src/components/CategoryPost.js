import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleCategoryPosts } from '../actions/posts'

class CategoryPost extends Component {
  componentDidMount () {
    const { category } = this.props.match.params
    this.props.dispatch(handleCategoryPosts(category))
  }

  render() {
    return (
      <div>Teste</div>
    )
  }
}

function mapStateToProps({ posts }) {
  return {
    posts
  }
}

export default connect(mapStateToProps)(CategoryPost)

