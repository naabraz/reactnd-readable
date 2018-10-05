import React, { Component } from 'react'

import PostList from './PostList'
import CategoryList from './CategoryList'

class Home extends Component {
  render() {
    return (
      <div>
        <PostList />
        <CategoryList />
      </div>
    )
  }
}

export default Home