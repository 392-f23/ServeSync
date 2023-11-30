import React, { useState } from 'react';
import './Event.css';
import LoginPage from './LoginPage';
import { useDbUpdate } from '../utilities/firebase';
import { v4 as uuidv4 } from 'uuid'; 

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

const Event = ({ event , user }) => {
  const [isCommentBoxVisible, setIsCommentBoxVisible] = useState(false);
  const [comment, setComment] = useState('');
  const commentID = uuidv4();
  const [updateComments, updateResult] = useDbUpdate(`/events/${event.id}/comments/${commentID}`);
  if(user){
    console.log(user.uid);
  }
  

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      author: user.uid,
      text: comment,
    };

    updateComments(newComment);

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
