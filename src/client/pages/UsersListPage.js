import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from 'client/actions'
import { Helmet } from 'react-helmet'

class UserLists extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>
    })
  }

  getHead() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users App"/>
      </Helmet>
    )
  }

  render() {
    return (
      <div>
        {this.getHead()}
        Here is a big list of users:
        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

const loadData = (store) => {
  return store.dispatch(fetchUsers())
}

export default {
  component: connect(mapStateToProps, { fetchUsers })(UserLists),
  loadData
}