import React, { useState } from "react";
import "./Add.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Add() {
  const [eventData, setEventData] = useState({
    title: "",
    location: "",
    time: "",
    date: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
  });
  const [error, setError] = useState('');
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

  const handleSubmit = () => {
    const errorMessage = validateInput();
    if (errorMessage) {
      setError(errorMessage);
      return;
    }
    setError('');
    const eventObject = {
      title: eventData.title,
      location: eventData.location,
      time: eventData.time.toISOString(),
      date: eventData.date.toISOString(),
      contact: {
        name: eventData.contactName,
        email: eventData.contactEmail,
        phone: eventData.contactPhone
      }
    };
    console.log(eventObject);
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
          placeholderText="Select a time"
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

export default Add;
