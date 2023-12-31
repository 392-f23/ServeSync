import React, { useEffect, useState } from 'react';
import { useDbData, useAuthState } from '../utilities/firebase'; // Adjust the import path as needed

function CommentList() {
  const [userEvents, setUserEvents] = useState([]);
  const [userData] = useAuthState(); 
  const [eventsData] = useDbData('/events'); 
// console.log(userData);
  useEffect(() => {
    if (userData && eventsData) {
      const userEmail = userData.email;
      const filteredEvents = Object.values(eventsData).filter(event => event.authorID === userData.uid);
      setUserEvents(filteredEvents);
    }
  }, [userData, eventsData]);

  console.log(userEvents);
  userEvents.map(event => {
    Object.values(event.comments).forEach(value =>{
      if (value)
      console.log(value);
    });
  });
  return (
    <div>
      {userEvents.length > 0 ? (
        userEvents.map(event => (
          <div key={event.id}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>{event.location}</p>
            {/* Display comments for each event */}
            <div>
              <strong>Comments:</strong>
              {event.comments && Object.entries(event.comments).length > 0 ? (
                Object.entries(event.comments).map(([key,value]) => {return(<p key={key}>{value.text}</p>)})
              ) : (
                <p>No comments available.</p>
              )}
            </div>
            {/* Render other event details here */}
          </div>
        ))
      ) : (
        <p>No events found for your account.</p>
      )}
    </div>
  );
}

export default CommentList;
