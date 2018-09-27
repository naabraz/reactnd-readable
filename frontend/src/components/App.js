import React from 'react'
import { connect } from 'react-redux'

import ConnectedPost from './Post'
import {
  handleInitialData,
} from '../actions/shared'

class App extends React.Component {
  componentDidMount () {
    const { dispatch } = this.props

    dispatch(handleInitialData())
  }

  render() {
    if (this.props.loading === true) {
      return <h3>Loading</h3>
    }

    return (
      <div>
        <h1>Readable</h1>
        <ConnectedPost />
      </div>
    )
  }
}

export default connect((state) => ({
  loading: state.loading
}))(App)
