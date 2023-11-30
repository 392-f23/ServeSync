import React, { useEffect, useState } from 'react';
import { database, useAuthState, firebaseSignOut } from "../utilities/firebase";
import "./Profile.css";
import CommentList from './CommentList'; 

const Profile = () => {
    const [user] = useAuthState();
    const [userEvents, setUserEvents] = useState([]);

    useEffect(() => {
        if (user) {
            // const fetchUserEvents = async () => {
            //     try {
            //         // May be wrong and need to fix
            //         const response = await database.ref("events").once("value");
            //         const events = response.val() ? Object.values(response.val()) : [];
            //         const filteredEvents = events.filter(event => event.contact.email === user.email);
            //         setUserEvents(filteredEvents);
            //     } catch (error) {
            //         console.error("Error fetching events: ", error);
            //     }
            // };

            //fetchUserEvents();
        }
    }, [user]);

    const ProfilePhotoComponent = () => {
        return user ? (
            <div className="profile-info">
                <div className="profile-photo-wrapper">
                    <img id="profilePic" src={user.photoURL} alt="Profile Photo" className="circle_profile_photo" />
                </div>
                <h3 className="user-name">{user.displayName}</h3>
                <p className="user-email">{user.email}</p>
            </div>
        ) : null;
    };

    const renderUserEvents = () => {
        return userEvents.map((event, index) => (
            <div key={index} className="user-event">
                <p>Title: {event.title}</p>
                <p>Location: {event.location}</p>
                <p>Date: {event.date}</p>
            </div>
        ));
    };

    return (
        <div className="profile-container">
            <header className="profile-header">
                <h2>Profile</h2>
            </header>
            <main>
                <ProfilePhotoComponent />
                <section className="activity-section">
                    <h3>Your Events</h3>
                    {renderUserEvents()}
                </section>
                <section className="activity-section">
                    <CommentList />
                </section>
            </main>
            <footer>
                <button className="signout-button" onClick={firebaseSignOut}>Sign Out</button>
            </footer>
        </div>
    );
}

export default Profile;
