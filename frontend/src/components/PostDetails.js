import React, { Component } from 'react'
import { connect } from 'react-redux'
import Rating from 'react-rating'
import { Link } from 'react-router-dom'

import { handlePostDetails } from '../actions/posts'

import CommentsList from './CommentsList'
import AddComment from './AddComment'

class PostDetails extends Component {

  componentDidMount () {
    const { id } = this.props.match.params

    this.props.dispatch(handlePostDetails(id))
  }

  updateVoteScore () {
    console.log('get post component and treat it')
  }

  render() {
    const { post } = this.props

    return (
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p>Author: {post.author}</p>
        <p>Comments: {post.commentCount}</p>

        <Rating initialRating={post.voteScore} stop={10} onClick={(newValue) => this.updateVoteScore(newValue, post.voteScore)}/>

        <p>
          <Link to={{ pathname: `/post/edit/${post.id}`, state: { post }}}>Edit</Link> | 
          <Link to='/edit'>Remove</Link>
        </p>

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