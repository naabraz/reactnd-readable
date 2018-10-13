import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import PostsList from './PostsList'
import PostDetails from './PostDetails'
import AddPost from './AddPost'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <h1>Readable</h1>
            <Switch>
              <Route path='/' exact component={PostsList} />
              <Route path='/new' exact component={AddPost} />
              <Route path='/:category' exact component={PostsList} />
              <Route path='/:category/:id' exact component={PostDetails} />
            </Switch>
        </div>
      </Router>
    )
  }
}

export default App