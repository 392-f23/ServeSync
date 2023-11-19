import React from 'react'
import EventList from './EventList';


const Events = ({events}) => {
  console.log(events);
  return (
    <div className=''>
      <h1>Events</h1>
      <EventList events={events} />
    </div>
  )
}

export default Events