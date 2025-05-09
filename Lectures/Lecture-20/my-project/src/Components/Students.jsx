import React from "react";

function Students(props) {
  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
          <p>Name : {props.name}</p>
          <p>Email : {props.email}</p>
        </div>
      </div>
    </>
  );
}

export default Students;
