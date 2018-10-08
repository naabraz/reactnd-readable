import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'

import PostList from './PostList'

class App extends Component {


  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div>
            <h1>Readable</h1>
            {this.props.loading === true
              ? null
              : <div>
                  <Route path='/' exact component={PostList} />
                  <Route path='/:category' component={PostList} />
                </div>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ loading }) {
  return {
    loading
  }
}

export default connect(mapStateToProps)(App)
