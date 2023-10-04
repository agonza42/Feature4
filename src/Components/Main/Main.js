import React, { useState, useEffect } from "react";
import { getAllUsers, Users } from "../../Common/Services/UserService.js";
import MainList from "./MainList";
import UserComponent from "../UserComponent.js"

// Import the CSS file
import '../../Style/Home.css'; 


// import useFetch from "../../Common/Services/useFetch.js";

/* MAIN MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
const Main = () => {
  // const data = useFetch("https://jsonplaceholder.typicode.com/todos/");
  // console.log("data: ", data);
  // Variables in the state to hold data
  const [users, setUsers] = useState([]);

  // UseEffect to run when the page loads to
  // obtain async data and render
  useEffect(() => {
    if (Users.collection.length) {
      setUsers(Users.collection);
    } else {
      getAllUsers().then((users) => {
        console.log(users);
        setUsers(users);
      });
    }
  }, []);

  return (
    <div>
      <h4 id="subtitle">
        Welcome to the one-stop location to track and embark on your
        personalized fitness journey!
      </h4>
      <MainList users={users} />
      <UserComponent />
    </div>
  );
};

export default Main;
