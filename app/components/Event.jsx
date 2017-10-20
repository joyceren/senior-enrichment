import React from 'react';
import { Link } from 'react-router-dom';

export default function Event(props) {
  event = props.eventInfoObj;
  return (
    <Link to={`/events/${event.id}`}>
      <div key={event.id} className="event">
        <h3>{event.name}</h3>
        <div>
          <h4>When:</h4> <p>{event.time}</p>
        </div>
        <div>
          <h4>Where:</h4> <p>{event.location}</p>
        </div>
        <div>
          <h4>Cost:</h4> <p>${event.cost}</p>
        </div>
      </div>
    </Link>
  );
}
