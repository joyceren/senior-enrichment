import React, { Component } from 'react';
import Week from './Week';
import axios from 'axios';

export default class Calendar extends Component {
  constructor() {
    super()
    this.state = {
      events: [
        { name:'Test Event 1', time: 'Oct 23', location: '123 main street', description: 'test', cost: '20' },
        { name:'Test Event 2', time: 'Oct 31', location: '123 main street', description: 'test', cost: '20' },
        { name:'Test Event 3', time: 'Nov 15', location: '123 main street', description: 'test', cost: '20' },
        { name:'Test Event 4', time: 'Nov 15', location: '123 main street', description: 'test', cost: '20' }
      ],
      thisWeek: [],
      nextWeek: [],
      beyond: [],
    }
  }

  componentDidMount() {
    axios.get('/api/events/thisWeek')
      .then(res => res.data)
      .then(thisWeek => this.setState( { thisWeek } ))
    axios.get('/api/events/nextWeek')
      .then(res => res.data)
      .then(nextWeek => this.setState( { nextWeek } ))
    axios.get('/api/events/beyond')
      .then(res => res.data)
      .then(beyond => this.setState( { beyond } ))
  }

  render() {
    const { thisWeek, nextWeek, beyond } = this.state;

    return (
      <div className="calendar-container">
        <Week name="This Week" weekArr={thisWeek}/>
        <Week name="Next Week" weekArr={nextWeek}/>
        <Week name="Beyond" weekArr={beyond}/>
      </div>
    )
  }
}
