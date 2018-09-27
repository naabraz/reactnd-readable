import React from 'react'
import { connect } from 'react-redux'

class Post extends React.Component {

  render() {
    return (
      <div>
        <h2>Post</h2>
        <ul>
          {this.props.posts.map((post) => (
            <li key={post.title}>
              <h3>{post.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default connect((state) => ({
  posts: state.posts
}))(Post)