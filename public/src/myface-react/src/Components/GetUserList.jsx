import React from "react";

const GetUserList = (props) => {
    const[users, setUserList] =  React.useState([]);
  
    React.useEffect(function(){
        async function fetchData(){
          const response = await fetch("http://localhost:3001/users");
          const json = await response.json();
          setUserList(json.results)
        }
        fetchData();
    }, []);

    if (users.length === 0) {
      return <p>No users to show</p>
    }
  
    return <ol>
      {users.map(function(user, index){
        return <li>
          <p>{user.username}</p>
        </li>
      })}
    </ol>

}



export default GetUserList;