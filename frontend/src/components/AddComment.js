import React, { Component } from 'react'
import serializeForm from 'form-serialize'

class AddComment extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    
    const values = serializeForm(e.target, {hash: true})
  }

  render() {
    return(
      <form  onSubmit={this.handleSubmit}>
        <input type="text" name="author" placeholder="Name" />
        <textarea name="comment" placeholder="Comment"/>
        <button>Add Contact</button>
      </form>
    )
  }
}

export default AddComment