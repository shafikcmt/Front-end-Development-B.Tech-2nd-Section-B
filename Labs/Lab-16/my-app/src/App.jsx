import React from "react";
import User from "./Components/User";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./Profile";

const students = [
  { sname: "Sagar", email: "sagar@gmail.com", phone: "+91-34567899" },
  { sname: "rahuk", email: "rahuk@gmail.com", phone: "+91-34567899" },
  { sname: "mayank", email: "mayank@gmail.com", phone: "+91-34567899" },
  { sname: "Mohit", email: "mohit@gmail.com", phone: "+91-34567899" },
  { sname: "suraj", email: "suraj@gmail.com", phone: "+91-34567899" },
  { sname: "kumar", email: "kumar@gmail.com", phone: "+91-34567899" },
];

function App() {
  return (
    <div className="container">
      <div className="row">
        {students.map((student) => (
          <div className="col-md-4">
            <User
              name={student.sname}
              email={student.email}
              phone={student.phone}
            />
          </div>
        ))}
      </div>
      {students.map((student) => (
        <Profile
          name={student.sname}
          email={student.email}
          phone={student.phone}
        />
      ))}
    </div>
  );
}

export default App;
