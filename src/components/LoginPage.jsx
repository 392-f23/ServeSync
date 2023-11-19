import React, { useState } from 'react';
import './LoginPage.css';
import { signInWithGoogle } from '../utilities/firebase';

const LoginPage = () => {

    const handleGoogleLogin = () => {
        signInWithGoogle();
    }

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src="https://firebasestorage.googleapis.com/v0/b/servesync-a44e6.appspot.com/o/ServeSync.png?alt=media&token=b921f9bb-07c4-480d-92b3-4e3689982356" alt="ServeSync Logo" />
      </div>
      <h1>ServeSync</h1>
      <p>Help track your volunteering</p>
      <button className="get-started-button" onClick={handleGoogleLogin}>Get Started</button>
    </div>
  );
};

export default LoginPage;