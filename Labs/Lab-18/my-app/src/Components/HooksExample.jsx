import React, { useEffect, useState } from "react";

function HooksExample() {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // API Fetch
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div>
      <h1>Hooks Example clicked {counter} times</h1>
      <button onClick={() => setCounter(counter + 1)}>Click Me</button>
      <h2>User List</h2>
      {users.map((user) => (
        <li>{user.name}</li>
      ))}
    </div>
  );
}

export default HooksExample;
