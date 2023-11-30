import React from 'react'
import EventList from './EventList';


const Events = ({events, user}) => {
  console.log(events);
  return (
    <div className=''>
      <h1>Events</h1>
      <EventList events={events} user={user}/>
    </div>
  )
}

export default Events