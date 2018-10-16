import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import VoteScore from './VoteScore'

import { 
  handlePostDetails, 
  handleRemovePost, 
} from '../actions/posts'

import CommentsList from './CommentsList'
import AddComment from './AddComment'

class PostDetails extends Component {

  componentDidMount () {
    const { id } = this.props.match.params

    this.props.dispatch(handlePostDetails(id))
  }

  removePost (e, post) {
    e.preventDefault()

    this.props.dispatch(handleRemovePost(post))
  }

  render() {
    const { post } = this.props

    return (
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p>Author: {post.author}</p>
        <p>Comments: {post.commentCount}</p>

        <VoteScore initialRating={post.voteScore} />

        <p>
          <Link to={{ pathname: `/post/edit/${post.id}`, state: { post }}}>Edit</Link> | 
          <Link to='' onClick={(e) => this.removePost(e, post)}>Remove</Link>
        </p>

        <hr />

        <CommentsList />
        <AddComment />
      </div>
    )
  }
}

function mapStateToProps ({ posts }) {
  return {
    post: posts,
  }
}

export default connect(mapStateToProps)(PostDetails)