import React, { Component } from 'react';
import axios from 'axios';
import history from '../history'

export default class AddEvent extends Component {

  constructor() {
    super();
    this.onSubmit=this.onSubmit.bind(this);
  }

  componentDidMount() {}

  onSubmit(event) {
    event.preventDefault();
    const user = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value || null,
      birthday: event.target.birthday.value,
    }

    console.log(user);

    axios.post('/api/users', user)
    .then(result => {
      console.log(result)
      history.push('/');
    })
  }

  render() {
    return (
      <div className='form'>
        <form onSubmit={this.onSubmit}>
          <label>name:</label> <input name="name" type="name"></input>
          <label>email:</label> <input name='email' type="email"></input>
          <label>phone number:</label> <input name='phone' type='tel'></input>
          <label>birthday:</label> <input name='birthday' type='date'></input>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }

}
