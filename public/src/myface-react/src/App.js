import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.scss";
import GetPosts from "./Components/GetPosts";
import GetUserList from "./Components/GetUserList";
import GetUserDetails from "./Components/GetUserDetails";

function App() {

  let thisPage = <GetPosts />
  const [state, setState] = useState(thisPage);

  let newPage;

  const UserListButton = () => {
    newPage = <GetUserList />;
    setState(newPage);
  };

  const UserProfileButton = () => {
    newPage = <GetUserDetails id="58"/>;
    setState(newPage);
  };

  const HomeButton = () => {
    newPage = <GetPosts />
    setState(newPage)
  };

  return (
    <div className="App">
      <div>
      <button onClick={HomeButton}>Home</button>
        <button onClick={UserListButton}>Users</button>
        <button onClick={UserProfileButton}>User Details</button>
      </div>
      
      {state}
    </div>
  );
}

export default App;
