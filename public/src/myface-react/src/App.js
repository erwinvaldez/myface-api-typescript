import React from "react";
// import logo from './logo.svg';
import './App.css';
import GetPosts from "./Components/GetPosts";
import GetUserList from "./Components/GetUserList";
import GetUserDetails from "./Components/GetUserDetails";


function App() {
  return (
    <div className="App">
      <GetPosts />
      <GetUserList />
      <GetUserDetails id="58"/>
    </div>
  );
}

export default App;
