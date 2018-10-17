import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import VoteScore from './VoteScore'

import {
  handlePostDetails,
  handleRemovePost,
} from '../actions/posts'

import CommentsList from './CommentsList'
import AddComment from './AddComment'
import ContentNotFound from './ContentNotFound'

class PostDetails extends Component {

  state = {
    toHome: false,
  }

  componentDidMount () {
    const { id } = this.props.match.params

    this.props.dispatch(handlePostDetails(id))
  }

  removePost (e, post) {
    e.preventDefault()

    this.props.dispatch(handleRemovePost(post))

    this.setState(() => ({
      toHome: true
    }))
  }

  render() {
    const { post, loadingBar } = this.props
    const { toHome } = this.state

    if (toHome) {
      return <Redirect to={'/'} />
    }

    return (
      <div>
        {loadingBar.default !== 0 ? null
          :
          <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>Author: {post.author}</p>
            <p>Comments: {post.commentCount}</p>

            <VoteScore initialRating={post.voteScore} data={post} type={'post'} />

            <p>
              <Link to={{ pathname: `/post/edit/${post.id}`, state: { post }}}>Edit</Link> |
              <Link to='' onClick={(e) => this.removePost(e, post)}>Remove</Link>
            </p>

            <hr />

            <CommentsList />
            <AddComment />
          </div>
        }
      </div>

    )
  }
}

function mapStateToProps ({ posts, loadingBar }) {
  const [post] = posts

  return {
    post,
    loadingBar,
  }
}

export default connect(mapStateToProps)(PostDetails)