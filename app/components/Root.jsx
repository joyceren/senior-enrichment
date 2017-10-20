import React, { Component } from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import AddEvent from './AddEvent';
import Calendar from './Calendar';
import UserList from './UserListPage';
import AddUser from './AddUser';
import SingleUser from './SingleUserPage';
import SingleEvent from './SingleEventPage';
import axios from 'axios';

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
      <BrowserRouter>
        <div>
          <div>
            <Navbar />
            <div>
              <Route exact path='/' component={Calendar} />
              <Route path='/addEvent' component={AddEvent} />
              <Route exact path='/users' component={UserList} />
              <Route exact path='/events/:id' component={SingleEvent} />
              <Route path='/addUser' component={AddUser} />
            </div>
          </div>
          <footer>
            <div>L O G O</div>
            <div>
              <h4>A Grace Hopper Project</h4>
            </div>
            <div>
              <p>2017 Joyce Ren</p>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    )
  }
}
