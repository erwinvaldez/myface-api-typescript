import React, { useState } from "react";
import GetUserDetails from "./GetUserDetails";
import GetUserList from "./GetUserList";
import GetPosts from "./GetPosts";
import UserListButton from "./UserListButton";
import UserProfileButton from "./UserProfileButton";

const NavBar = () => {

  UserListButton();
  UserProfileButton();
  return (
    <div>
      <button onClick={UserListButton}>Users</button>
      <button onClick={UserProfileButton}>User Details</button>
    </div>
  );
};

export default NavBar;
