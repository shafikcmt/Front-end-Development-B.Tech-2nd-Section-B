import React from "react";

function User(props) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h4 className="card-title">{props.name}</h4>
        <h4 className="card-title">{props.email}</h4>
        <h4 className="card-title">{props.phone}</h4>
      </div>
    </div>
  );
}

export default User;
