import React from "react";

const UserDetailsCard = (user) => {
    return    (                         
    <div>
        <p>{user.username}</p>
        <img className="imgSize" src ={user.coverImageUrl} alt={user.username}/>
        <img className="imgSize" src ={user.profileImageUrl} alt={user.username}/>
    </div>
    )
}

export default UserDetailsCard;
