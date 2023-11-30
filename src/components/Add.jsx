import React, { useState } from "react";
import "./Add.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { database, useDbUpdate, useAuthState } from '../utilities/firebase';
import { v4 as uuidv4 } from 'uuid'; 

function Add({user}) {
  const [eventData, setEventData] = useState({
    title: "",
    location: "",
    description: "",
    time: null,
    endtime: null,
    date: null,
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    comments: [],
    authorID: ""
  });
  const [error, setError] = useState('');
  const eventId = uuidv4();
  const [updateEvents, updateResult] = useDbUpdate(`/events/${eventId}`);
  const [userData] = useAuthState(); 
  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (name, date) => {
    setEventData({ ...eventData, [name]: date });
  };
  

  const validateInput = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    const phoneRegex = /^[0-9]{10}$/;
    if (!emailRegex.test(eventData.contactEmail)) {
      return 'Please enter a valid email address.';
    }
    if (!phoneRegex.test(eventData.contactPhone)) {
      return 'Please enter a valid 10-digit phone number.';
    }
    return '';
  };

  const handleSubmit = async (e) => {
    console.log("entered handleSubmit");
    e.preventDefault(); 
    
    // const errorMessage = validateInput();
    // if (errorMessage) {
    //   console.log(errorMessage)
    //   setError(errorMessage);
    //   return;
    // }
    // setError('');
    const startTime = formatTime(eventData.time);
    const endTime = formatTime(eventData.endtime);
    const timeRangeString = `${startTime} - ${endTime}`;
    const eventObject = {
        id: eventId,
        title: eventData.title,
        location: eventData.location,
        time: timeRangeString,
        date: eventData.date.toISOString().split('T')[0],
        description: eventData.description,
        contact: {
          name: eventData.contactName,
          email: userData.email,
          phone: eventData.contactPhone
        },
        comments: {"0": ""},
        authorID: user.uid
    };
    console.log(eventObject);

    try{
      //await db.collection("events").add(eventObject);
      await updateEvents(eventObject);
      console.log(eventObject);
      // NAVIGATE BACK TO HOME
    } catch (error) {
      console.error("Error adding event: ", error);
    }
  };

  return (
    <div>
      <div className="add-form-container">
        
        <form onSubmit={handleSubmit} className="add-form">
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={handleChange}
          />
          <DatePicker
            selected={eventData.date}
            onChange={(date) => handleDateChange('date', date)}
            dateFormat="yyyy/MM/dd"
            placeholderText="Select a date"
          />

          <DatePicker
            selected={eventData.time}
            onChange={(date) => handleDateChange('time', date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
            placeholderText="Select a start time"
          />
          <DatePicker
            selected={eventData.endtime}
            onChange={(date) => handleDateChange('endtime', date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
            placeholderText="Select an end time"
          />
          <input
            type="text"
            name="contactName"
            placeholder="Contact Name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="contactEmail"
            placeholder="Contact Email"
            onChange={handleChange}
          />
          <input
            type="text"
            name="contactPhone"
            placeholder="Contact Phone"
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

// Function to format date to 'h:mm aa'
function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;

  const strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}


export default Add;
