import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    <header>
      <div className="title">
        <Link to='/'><h1>UPCOMING EVENTS</h1></Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to='/addEvent'>add event</Link>
          </li>
          <li>
            <Link to='/users'>classmates</Link>
          </li>
          <li>
            <Link to='/addUser'>new user</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
