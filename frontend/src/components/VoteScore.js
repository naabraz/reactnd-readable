import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  TiThumbsUp,
  TiThumbsDown,
} from 'react-icons/ti'

import {
  handleUpdatePostVoteScore,
} from '../actions/posts'

import {
  handleUpdateCommentScore,
} from '../actions/comments'

class VoteScore extends Component {
  voteOptions = {
    upVote: 'upVote',
    downVote: 'downVote',
  }

  dataOptions = {
    comment: 'comment',
    post: 'post',
  }

  state = {
    initialRating: this.props.initialRating
  }

  updateVoteScore(option) {
    const { type, data } = this.props

    const voteScore = {
      option,
      id: data.id
    }

    this.setState((state) => ({
      initialRating: option === this.voteOptions.upVote ? state.initialRating + 1 : state.initialRating - 1
    }))

    type === 'post' ? this.props.dispatch(handleUpdatePostVoteScore(voteScore)) : this.props.dispatch(handleUpdateCommentScore(voteScore)) 
  }

  render() {
    const { initialRating } = this.state

    return (
      <div>
        <TiThumbsUp className='vote-icon' onClick={() => this.updateVoteScore(this.voteOptions.upVote)} />
        <TiThumbsDown className='vote-icon' onClick={() => this.updateVoteScore(this.voteOptions.downVote)} />
        <p>Score: { initialRating } </p>
      </div>
    )
  }
}

export default connect()(VoteScore)