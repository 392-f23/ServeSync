import React from 'react';
import Event from './Event'; // Assuming Event.js is in the same directory

const EventList = ({ events, user }) => {
  console.log(events)
  const eventsObject = events.events;
  const eventsArray = Object.values(eventsObject);

  return (
    <div className="event-list">
      {eventsArray.map((event, index) => (
        <div key={index}>
          <Event event={event} user = {user}/>
          <br />
        </div>
      ))}
    </div>
  );
};

export default EventList;
