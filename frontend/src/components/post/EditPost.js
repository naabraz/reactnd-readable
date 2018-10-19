import React, { Component } from 'react'
import { connect } from 'react-redux'
import serializeForm from 'form-serialize'
import { Redirect } from 'react-router-dom'

import {
  handleUpdatePost,
} from '../../actions/post'

class EditPost extends Component {

  state = {
    ...this.props.location.state.post,
    toHome: false,
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const postUpdated = { ...serializeForm(e.target, {hash: true}), id: this.state.id}

    this.props.dispatch(handleUpdatePost(postUpdated))

    this.setState(() => ({
      toHome: true
    }))
  }

  handleChangeTitle = e => {
    this.setState({ title: e.target.value });
  }

  handleChangeBody = e => {
    this.setState({ body: e.target.value })
  }

  render() {
    const { title, body, toHome, id } = this.state

    if (toHome) {
      return <Redirect to={`/post/${id}`} />
    }

    return (
      <div>
        <h2>Edit Post</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" value={title} onChange={this.handleChangeTitle} required />
          <textarea name="body" value={body} onChange={this.handleChangeBody} required />
          <button>Send</button>
        </form>
      </div>
    )
  }
}

export default connect()(EditPost)