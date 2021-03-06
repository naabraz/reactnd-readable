import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import moment from 'moment'

import { 
  handlePostComments, 
  handleRemovePostComment,
} from '../../actions/comments'

import VoteScore from '../shared/VoteScore'

class CommentsList extends Component {

  componentDidMount() {
    const { id } = this.props.match.params

    this.props.dispatch(handlePostComments(id))
  }

  removeComment = (e, id) => {
    e.preventDefault()

    this.props.dispatch(handleRemovePostComment(id))
  }

  formatDate = date => {
    const dateFormatted = new Date(date)

    return dateFormatted
  }

  render() {
    const { comments } = this.props

    return (
      <div className='comments-list'>
        <h3>Comments</h3>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <p>Author: {comment.author} | {moment(comment.timestamp).format('M/D/YYYY')}</p>
              <p>{comment.body}</p>
              
              <VoteScore initialRating={comment.voteScore} data={comment} type={'comment'} />
              
              <Link to={{ pathname: `/comment/edit/${comment.id}`, state: { comment }}}>Edit</Link> | 
              <Link to='' onClick={(e) => this.removeComment(e, comment.id)}>Remove</Link>
              <hr />
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