import React, { useState } from "react";
import GetUserDetails from "./GetUserDetails";
import GetUserList from "./GetUserList";
import GetPosts from "./GetPosts";


// Button to change state to User List
const UserListButton = () => {
    return <GetUserList />;
};

export default UserListButton;
