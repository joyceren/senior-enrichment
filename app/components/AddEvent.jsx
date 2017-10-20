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
    const e = {
      name: event.target.name.value,
      time: event.target.date.value,
      location: event.target.location.value,
      description: event.target.description.value,
      cost: event.target.cost.value,
    }

    console.log(e);

    axios.post('/api/events', e)
    .then(result => {
      console.log(result)
      history.push('/');
    })
  }

  render() {
    return (
      <div className='form'>
        <form onSubmit={this.onSubmit}>
          <label>event:</label> <input name="name" type="text"></input>
          <label>when:</label> <input name='date' type="date"></input>
          <label>where:</label> <input name='location' type='text'></input>
          <label>description:</label> <input name='description' type='text'></input>
          <label>cost:</label> <input name='cost' type='number'></input>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }

}
