import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class Root extends Component {
  constructor() {
    super()
    this.state={
      users: [],
    }
  }

  componentDidMount() {
    axios.get('/api/users/')
       .then(res => res.data)
       .then(users => {
         console.log( users )
         this.setState({ users })
    });
  }

  render() {
  return (
    <div className='userlist'>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.users.map(user => (
                <tr key={user.id} className="UserListItem">
                  <td><Link to={`/users/${user.id}`}>{user.name}</Link></td>
                  <td><Link to={`/users/${user.id}`}>{user.email}</Link></td>
                </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )}
}
