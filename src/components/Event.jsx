import React, { useState } from 'react';
import './Event.css';

const EventDetails = ({ event }) => (
  <div>
    <h3>{event.title}</h3>
    <p><strong>Description:</strong> {event.description}</p>
    <p><strong>Date:</strong> {event.date}</p>
    <p><strong>Time:</strong> {event.time}</p>
    <p><strong>Location:</strong> {event.location}</p>
    <p><strong>Contact:</strong> {event.contact.name}</p>
    <p><strong>Email:</strong> {event.contact.email}</p>
    <p><strong>Phone:</strong> {event.contact.phone}</p>
  </div>
);

const CommentBox = ({ comment, setComment, handleCommentSubmit }) => (
  <div className="comment-box">
    <form onSubmit={handleCommentSubmit}>
      <textarea
        placeholder="Write your comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  </div>
);

const Event = ({ event }) => {
  const [isCommentBoxVisible, setIsCommentBoxVisible] = useState(false);
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setComment('');
  };

  return (
    <div className="event shadow-2lg w-3/4 mx-auto">
      <EventDetails event={event} />
      <button onClick={() => setIsCommentBoxVisible(!isCommentBoxVisible)}>
        {isCommentBoxVisible ? 'Hide Comment Box' : 'Reply'}
      </button>
      {isCommentBoxVisible && (
        <CommentBox
          comment={comment}
          setComment={setComment}
          handleCommentSubmit={handleCommentSubmit}
        />
      )}
    </div>
  );
};

export default Event;
