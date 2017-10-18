import React from 'react';

export default function Navbar(props) {
  event = props.eventInfoObj;

  return (
    <div className="event">
      <p>Event Name:{event.name}</p>
      <p>When:{event.time}</p>
      <p>Where:{event.location}</p>
      <p>Description:{event.description}</p>
      <p>Cost:${event.cost}</p>
    </div>
  );
}
