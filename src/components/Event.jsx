import React, { useState } from 'react';
import './Event.css';

const Event = ({ event }) => {
  const [isCommentBoxVisible, setIsCommentBoxVisible] = useState(false);
  const [comment, setComment] = useState('');

  const toggleCommentBox = () => {
    setIsCommentBoxVisible(!isCommentBoxVisible);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setComment('');
  };

  return (
    <div className="event shadow-2lg w-3/4 mx-auto">
      <h3>{event.title}</h3>
      <p>
        <strong>Description:</strong> {event.description}
      </p>
      <p>
        <strong>Date:</strong> {event.date}
      </p>
      <p>
        <strong>Time:</strong> {event.time}
      </p>
      <p>
        <strong>Location:</strong> {event.location}
      </p>
      <p>
        <strong>Contact:</strong> {event.contact.name}
      </p>
      <p>
        <strong>Email:</strong> {event.contact.email}
      </p>
      <p>
        <strong>Phone:</strong> {event.contact.phone}
      </p>
      <button onClick={toggleCommentBox}>
        {isCommentBoxVisible ? 'Hide Comment Box' : 'Reply'}
      </button>
      {isCommentBoxVisible && (
        <div className="comment-box">
          <form onSubmit={handleCommentSubmit}>
            <textarea
              placeholder="Write your comment..."
              value={comment}
              onChange={handleCommentChange}
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Event;
