import React from 'react';
import Event from './event';

export default function Week() {
// testArr.map(event => {<Event eventInfoObj=event/>})}
  const testArr = [
    {
      name:'Test Event 1',
      time: 'Oct 23',
      location: '123 main street',
      description: 'test',
      cost: '20',
    },
    {
      name:'Test Event 2',
      time: 'Oct 31',
      location: '123 main street',
      description: 'test',
      cost: '20',
    },
    {
      name:'Test Event 3',
      time: 'Nov 15',
      location: '123 main street',
      description: 'test',
      cost: '20',
    }
  ];

  return (
    <div className="week">
      <Event eventInfoObj={{
        name:'Test Event 3',
        time: 'Nov 15',
        location: '123 main street',
        description: 'test',
        cost: '20',
      }}
      />
    </div>
  )
}
