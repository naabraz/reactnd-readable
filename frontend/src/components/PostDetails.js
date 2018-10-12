import React, { Component } from 'react'
import { connect } from 'react-redux'
import Rating from 'react-rating'
import { NavLink } from 'react-router-dom'

import { handlePostDetails } from '../actions/posts'
import { handlePostComments } from '../actions/comments'

class PostDetails extends Component {

  componentDidMount () {
    const { id } = this.props.match.params

    this.props.dispatch(handlePostDetails(id))
    this.props.dispatch(handlePostComments(id))
  }

  updateVoteScore () {
    console.log('get post component and treat it')
  }

  render() {
    const { post, comments } = this.props

    return (
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p>Author: {post.author}</p>
        <p>Comments: {post.commentCount}</p>
        <Rating initialRating={post.voteScore} stop={10} onClick={(newValue) => this.updateVoteScore(newValue, post.voteScore)}/>
        <p><NavLink to='/edit' exact>Edit</NavLink> | <NavLink to='/edit' exact>Remove</NavLink></p>
      </div>
    )
  }
}

function mapStateToProps ({ posts, comments }) {
  return {
    post: posts,
    comments
  }
}

export default connect(mapStateToProps)(PostDetails)