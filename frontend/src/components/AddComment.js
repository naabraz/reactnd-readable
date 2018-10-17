import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import serializeForm from 'form-serialize'

import { idGenerator } from '../helpers/idGenerator'
import { handleAddPostComment } from '../actions/comments'

class AddComment extends Component {

  state = {
    author: '',
    body: '',
  }

  handleChangeAuthor = (e) => {
    const author = e.target.value
    this.setState(() => ({
      author,
    }))
  }

  handleChangeBody = (e) => {
    const body = e.target.value

    this.setState(() => ({
      body,
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { id } = this.props.match.params
    const formValues = serializeForm(e.target, {hash: true})

    const commentPayload = {
      ...formValues,
      id: idGenerator(),
      timestamp: + new Date(),
      parentId: id
    }

    this.props.dispatch(handleAddPostComment(commentPayload))

    this.setState(() => ({
      author: '',
      body: ''
    }))
  }

  render() {
    const { author, body } = this.state

    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="author" placeholder="Name" required value={author} onChange={this.handleChangeAuthor} />
        <textarea name="body" placeholder="Comment" required value={body} onChange={this.handleChangeBody} />
        <button>Add Comment</button>
      </form>
    )
  }
}

export default withRouter(connect()(AddComment))