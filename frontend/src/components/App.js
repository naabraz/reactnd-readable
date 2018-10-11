import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PostList from './PostList'

class App extends Component {
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

export default App