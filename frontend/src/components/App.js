import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import PostList from './PostList'
import PostDetails from './PostDetails'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <h1>Readable</h1>
          <Route path='/' exact component={PostList} />
          <Route path='/:category' exact component={PostList} />
          <Route path='/:category/:id' exact component={PostDetails} />
        </div>
      </Router>
    )
  }
}

export default App