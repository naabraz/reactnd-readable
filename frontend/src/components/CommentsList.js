import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link, withRouter } from 'react-router-dom'
import Rating from 'react-rating'

import { 
  handlePostComments, 
  handleRemovePostComment,
} from '../actions/comments'

class CommentsList extends Component {

  componentDidMount() {
    const { id } = this.props.match.params

    this.props.dispatch(handlePostComments(id))
  }

  updateVoteScore() {
    console.log('get post component and treat it')
  }

  removeComment = (e, id) => {
    e.preventDefault()

    this.props.dispatch(handleRemovePostComment(id))
  }

  render() {
    const { comments } = this.props

    return (
      <div>
        <h3>Comments</h3>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <p>Author: {comment.author}</p>
              <p>Date: {comment.timestamp}</p>
              <p>{comment.body}</p>
              <Rating initialRating={comment.voteScore} stop={10} onClick={(newValue) => this.updateVoteScore(newValue, comment.voteScore)} />
              <p>
                <Link to={{ pathname: `/comment/edit/${comment.id}`, state: { comment }}}>Edit</Link> | 
                <Link to='' onClick={(e) => this.removeComment(e, comment.id)}>Remove</Link>
              </p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ comments }) {
  return {
    comments,
  }
}

export default withRouter(connect(mapStateToProps)(CommentsList))