import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LoadingBar } from 'react-redux-loading'

import PostsList from './PostsList'
import PostDetails from './PostDetails'
import AddPost from './AddPost'
import EditPost from './EditPost'
import EditComment from './EditComment'
import Nav from './Nav'

class App extends Component {

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            <h1>Readable</h1>
              <Switch>
                <Route path='/' exact component={PostsList} />
                <Route path='/new' exact component={AddPost} />
                <Route path='/:category' exact component={PostsList} />
                <Route path='/:category/:id' exact component={PostDetails} />
                <Route path='/post/edit/:id' exact component={EditPost} />
                <Route path='/comment/edit/:id' exact component={EditComment} />
              </Switch>
          </div>
        </Fragment>
      </Router>
    )
  }
}

export default App