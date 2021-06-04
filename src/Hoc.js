import React, { Component } from 'react'

class CommentList extends Component {
  constructor() {
    super();
    this.state = {
      comments: DataSource.getComments()
    }
  }
  componentDidMount () {
    DataSource.addChangeListener(this.handleChange)
  }
  componentWillUnmount () {
    DataSource.removeChangeListener(this.handleChange)
  }
  handleChange () {
    this.setState({
      comments: DataSource.getComments()
    })
  }
}

const CommentListWithSubscription = withSubscription(
  CommentList,
  (DataSource) => DataSource.getComments()
);