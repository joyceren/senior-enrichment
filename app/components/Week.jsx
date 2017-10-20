import React from 'react';
import Event from './event';

export default function Week(props) {


  const mappedArr = props.weekArr.map((event, i) => {return (<Event className={props.name} key={i} eventInfoObj={event} />)});

  return (
    <div className='week-container'>
      <div className='week-title'>
        <h2>{props.name}</h2>
      </div>
      <div className="week">
        {mappedArr}
      </div>
    </div>
  )
}
