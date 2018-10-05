import React, { Component } from 'react'
import { connect } from 'react-redux'

class Post extends Component {

  // orderBy = (field) => {
  //   this.setState({
  //     posts: this.props.posts.sort((a, b) => this.state.order === 'asc' ? a[field] - b[field] : b[field] - a[field]),
  //     order: this.state.order === 'desc' ? 'asc' : 'desc'
  //   })
  // }

  render() {
    return (
      <div>
        <h2>Post</h2>
        <ul>
          {this.props.posts.map((post) => (
            <li key={post.title}>
              <h3>{post.title}</h3>
              {/* <a onClick={() => this.orderBy('timestamp')} href="#Date">Date</a> | <a onClick={() => this.orderBy('voteScore')} href="#Order">Score</a> */}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ posts }) {
  return {
    posts
  }
}

export default connect(mapStateToProps)(Post)