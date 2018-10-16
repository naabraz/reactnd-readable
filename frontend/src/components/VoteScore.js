import React, { Component } from 'react'
import Rating from 'react-rating'

import { 
  TiStarOutline, 
  TiStarFullOutline,
} from 'react-icons/ti'

class VoteScore extends Component {
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

    console.log(voteScore)
  }

  render() {
    const { initialRating } = this.props

    return (
      <Rating 
        initialRating={initialRating} 
        stop={5} 
        onClick={(newValue) => this.updateVoteScore(newValue, initialRating)}
        emptySymbol={<TiStarOutline className='vote-icon' />}
        fullSymbol={<TiStarFullOutline className='vote-icon' />} />
    )
  }
}

export default VoteScore