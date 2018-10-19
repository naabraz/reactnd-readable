import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import VoteScore from '../shared/VoteScore'

import {
  handleRemovePost,
} from '../../actions/posts'

import {
  handlePostDetails,
} from '../../actions/post'

import CommentsList from '../comment/CommentsList'
import AddComment from '../comment/AddComment'
import ContentNotFound from '../shared/ContentNotFound'

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
    const { post, loadingBar , postExist} = this.props
    const { toHome } = this.state

    if (toHome) {
      return <Redirect to={'/'} />
    }

    return (
      <div>
        {loadingBar.default !== 0 ? null
          :
          !postExist ? <ContentNotFound />
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

function mapStateToProps ({ post, loadingBar }) {
  return {
    post,
    loadingBar,
    postExist: post.id ? true : false
  }
}

export default connect(mapStateToProps)(PostDetails)