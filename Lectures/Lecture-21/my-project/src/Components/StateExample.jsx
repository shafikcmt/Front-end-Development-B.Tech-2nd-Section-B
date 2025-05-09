import React, { Component } from "react";

class StateExample extends Component {
  constructor() {
    super();
    this.state = {
      name: "Mohit",
      age: 21,
    };
  }
  changeValue() {
    this.setState({
      name: "Sahil",
      age: 24,
    });
  }

  render() {
    return (
      <>
        <h2>State Example</h2>
        <h3>
          Hello, My name is {this.state.name} and {this.state.age} years
        </h3>
        <button onClick={() => this.changeValue()}>Click Me</button>
      </>
    );
  }
}

export default StateExample;
