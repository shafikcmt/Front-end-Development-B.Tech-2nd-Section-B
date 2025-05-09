import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>Profile Components</h1>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{this.props.name}</h4>
            <h4 className="card-title">{this.props.email}</h4>
            <h4 className="card-title">{this.props.phone}</h4>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
