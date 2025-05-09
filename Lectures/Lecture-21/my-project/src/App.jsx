import React from "react";
import Students from "./Components/Students";
import "bootstrap/dist/css/bootstrap.min.css";
import StateExample from "./Components/StateExample";
import HooksExample from "./Components/HooksExample";

function App() {
  var students = [
    { name: "Akash", email: "akash@gmail.com" },
    { name: "Roni", email: "roni@gmail.com" },
    { name: "Kumar", email: "kumar@gmail.com" },
    { name: "Sahil", email: "sahil@gmail.com" },
    { name: "Sakil", email: "sakil@gmail.com" },
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          {students.map((user) => (
            <div className="col-md-4">
              <Students name={user.name} email={user.email} />
            </div>
          ))}
        </div>
        <hr />
        <StateExample />
        <hr />
        <HooksExample />
      </div>
    </>
  );
}

export default App;
