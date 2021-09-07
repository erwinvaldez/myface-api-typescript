import React from "react";
import CheckUserId from "./CheckUserId";

const GetUserDetails = (props) => {
  const [users, setUserDetails] = React.useState([]);

  React.useEffect(function () {
    async function fetchData() {
      const response = await fetch("http://localhost:3001/users");
      const json = await response.json();
      setUserDetails(json.results);
    }
    fetchData();
  }, []);


  if (users.length === 0) {
    return <p>No user to show</p>;
  }

  return (
    <div>
      <p>Trying to display user info</p>

      {users.map(function (user, index) {
          <p></p>
        return CheckUserId(user, props.id);
      })}
    </div>
  );
};

export default GetUserDetails;
