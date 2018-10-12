import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import serializeForm from 'form-serialize'

import { idGenerator } from '../helpers/idGenerator'
import { handleAddPostComment } from '../actions/comments'

class AddComment extends Component {

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
  }

  render() {
    return(
      <form  onSubmit={this.handleSubmit}>
        <input type="text" name="author" placeholder="Name" />
        <textarea name="body" placeholder="Comment"/>
        <button>Add Comment</button>
      </form>
    )
  }
}

export default withRouter(connect()(AddComment))