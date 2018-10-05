import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'

import { handleInitialData } from '../actions/shared'
import PostList from './PostList'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div>
            {this.props.loading === true
              ? null
              : <div>
                  <Route path='/' exact component={PostList} />
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
