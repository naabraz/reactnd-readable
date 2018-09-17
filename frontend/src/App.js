import React, { Component } from 'react'

import PostList from './components/post-list/PostList'
import CategoryList from './components/category-list/CategoryList'

import * as api from './utils/api'

import './App.css'

class App extends Component {

  state = {
    posts: [],
    categories: [],
    order: 'asc'
  }

  orderBy = (field) => {
    this.setState({
        posts: this.state.posts.sort((a, b) => this.state.order === 'asc' ? a[field] - b[field] : b[field] - a[field]),
        order: this.state.order === 'desc' ? 'asc' : 'desc'
    })
  }

  componentDidMount () {
    api.getPosts().then((posts) => {
      this.setState({ posts })
    })

    api.getCategories().then(({ categories }) => {
      this.setState({ categories })
    })
  }

  render() {
    const { posts, categories } = this.state

    return (
      <div className="wrapper">
        <a onClick={() => this.orderBy('timestamp')} href="#Date">Date</a> | <a onClick={() => this.orderBy('voteScore')} href="#Order">Score</a>

        <PostList posts={posts} />
        <CategoryList categories={categories}/>
      </div>
    )
  }
}

export default App
