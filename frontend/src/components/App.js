import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import PostList from './PostList'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <div>
            <h1>Readable</h1>
            <Route path='/' exact component={PostList} />
            <Route path='/:category' component={PostList} />
          </div>
        </Fragment>
      </Router>
    )
  }
}

export default connect()(App)