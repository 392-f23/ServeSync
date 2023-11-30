import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/NavBar";
import Events from "./components/Events";
import Add from "./components/Add";
import Profile from "./components/Profile";
import LoginPage from "./components/LoginPage"
import { useDbData, useAuthState } from "./utilities/firebase";

const App = () => {
   const [data, error] = useDbData("/");
    const [user] = useAuthState();
    if (error) return <h1>Error loading data: {`${error}`}</h1>;
    if (data === undefined) return <h1>Loading data...</h1>;
    if (!data) return <h1>No user data found</h1>;

  if(!user){
    return <LoginPage />;
  }

  return (
    <Router>
      <CustomNavbar />
      <div className="text-center">
        <Routes>
          <Route path="/" element={<Events events={data} user={user}/>} />
          <Route path="/Add" element={<Add user={user} />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
