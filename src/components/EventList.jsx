import React from 'react';
import Event from './Event'; // Assuming Event.js is in the same directory

const EventList = ({ events }) => {
  return (
    <div className="event-list">
      {events.events.map((event, index) => (
        <div key={index}>
          <Event event={event} />
          <br />
        </div>
      ))}
    </div>
  );
};

export default EventList;
