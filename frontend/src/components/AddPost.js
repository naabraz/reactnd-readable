import React, { Component } from 'react'
import { connect } from 'react-redux'
import serializeForm from 'form-serialize'
import { Redirect } from 'react-router-dom'

import { idGenerator } from '../helpers/idGenerator'
import { handleAddPost } from '../actions/posts'
import { handleFetchCategories } from '../actions/categories'

class AddPost extends Component {
  componentDidMount() {
    this.props.dispatch(handleFetchCategories())
  }
  
  state = {
    toHome: false,
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const formValues = serializeForm(e.target, {hash: true})

    const postPayload = {
      ...formValues,
      id: idGenerator(),
      timestamp: + new Date(),
    }

    this.props.dispatch(handleAddPost(postPayload))

    this.setState(() => ({
      toHome: true
    }))
  }

  render() {
    const { categories } = this.props
    const { toHome } = this.state
    
    if (toHome) {
      return <Redirect to={'/'} />
    }

    console.log(categories)
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="author" placeholder="Author" />
        <input type="text" name="category" placeholder="Category" />
        <textarea name="body" placeholder="Post"/>
        <button>Add Post</button>
      </form>
    )
  }
}

function mapStateToProps({ categories }) {
  return {
    categories
  }
}

export default connect(mapStateToProps)(AddPost)