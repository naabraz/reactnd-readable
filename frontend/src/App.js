import React, { Component } from 'react'

import Post from './components/post/Post'

import * as api from './utils/api'

import './App.css'

class App extends Component {

  state = {
    posts: []
  }

  componentDidMount () {
    api.getPosts().then((posts) => {
      this.setState({ posts })
    })
  }

  render() {
    const { posts } = this.state

    return (
      <div className="wrapper">
        <a href="#Order">Order by</a>
        { posts.map((post) => <Post key={post.id} post={post} />) }
      </div>
    )
  }
}

export default App
