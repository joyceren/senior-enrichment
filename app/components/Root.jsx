import React, { Component } from 'react';
import Navbar from './Navbar';
import Week from './Week';

export default class WinterJokes extends Component {
  constructor() {
    super()
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Navbar />
        <Week />
      </div>
    )
  }
}
