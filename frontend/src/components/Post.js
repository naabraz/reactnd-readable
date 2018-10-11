import React, { Component } from 'react'
import Rating from 'react-rating'
import { connect } from 'react-redux'
import { handleUpdateVoteScore } from '../actions/posts'

class Post extends Component {
  voteOptions = {
    upVote: 'upVote',
    downVote: 'downVote'
  }

  updateVoteScore (newValue, oldScore) {
    const voteScore = {
      option: newValue < oldScore ? this.voteOptions.downVote : this.voteOptions.upVote,
      id: this.props.post.id,
      posts: this.props.posts
    }

    this.props.dispatch(handleUpdateVoteScore(voteScore))
  }

  render() {
    const { post } = this.props

    return (
      <li>
        <h2><a href='/post/{post.id}'>{post.title}</a></h2>
        <p>Author: {post.author}</p>
        <p>Comments: {post.commentCount}</p>
        <Rating initialRating={post.voteScore} stop={10} onClick={(newValue) => this.updateVoteScore(newValue, post.voteScore)}/>
      </li>
   )
  }
}

function mapStateToProps({ posts }) {

  return {
    posts
  }

}

export default connect(mapStateToProps)(Post)