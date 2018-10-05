import React, { Component } from 'react'

class Post extends Component {
  // orderBy = (field) => {
  //   this.setState({
  //     posts: this.props.posts.sort((a, b) => this.state.order === 'asc' ? a[field] - b[field] : b[field] - a[field]),
  //     order: this.state.order === 'desc' ? 'asc' : 'desc'
  //   })
  // }

  render() {
    const { post } = this.props

    return (
      <li>
        <h2>{post.title}</h2>
        <p>Author: {post.author}</p>
        <p>Comments: {post.commentCount}</p>
        <p>Score: {post.voteScore}</p>
        {/* <a onClick={() => this.orderBy('timestamp')} href="#Date">Date</a> | <a onClick={() => this.orderBy('voteScore')} href="#Order">Score</a> */}
      </li>
   )
  }
}

export default Post