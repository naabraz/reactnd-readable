import React, { Component } from 'react'

import Post from './components/post/Post'
import * as api from './utils/api'

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
      posts.map((post) => {
        return <Post key={post.id} title={post.title} />
      })
    )
  }
}

export default App
