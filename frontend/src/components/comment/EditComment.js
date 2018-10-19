import React, { Component } from 'react'
import { connect } from 'react-redux'
import serializeForm from 'form-serialize'
import { Redirect } from 'react-router-dom'

import { handleEditPostComment } from '../../actions/comments'

class EditComment extends Component {

  state = {
    toHome: false,
    ...this.props.location.state.comment
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const commentUpdated = { 
      ...serializeForm(e.target, {hash: true}), 
      id: this.state.id,
      timestamp: + new Date(),
    }

    this.props.dispatch(handleEditPostComment(commentUpdated))

    this.setState(() => ({
      toHome: true
    }))
  }

  handleChangeBody = e => {
    this.setState({ body: e.target.value })
  }

  render() {
    const { body, toHome } = this.state

    if (toHome) {
      return <Redirect to={'/'} />
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <textarea name="body" value={body} onChange={this.handleChangeBody} />
        <button>Send</button>
      </form>
    )
  }
}

export default connect()(EditComment)