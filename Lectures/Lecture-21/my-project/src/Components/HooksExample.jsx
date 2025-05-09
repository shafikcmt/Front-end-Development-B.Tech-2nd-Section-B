import React from "react";
import { useState } from "react";

function HooksExample() {
  const [color, setColor] = useState("Red");
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  function changeName(data) {
    setName(data.target.value);
  }
  return (
    <>
      <h1>Hooks Example</h1>
      <h3>My faverite color is {color}</h3>
      <button onClick={() => setColor("Blue")}>Change Color</button>
      <h3>Button is Clicked {counter} times</h3>
      <button onClick={() => setCounter(counter + 1)}>Click Me</button> <br />
      <input type="text" onChange={changeName} />
      <h4>My Name is {name}</h4>
    </>
  );
}

export default HooksExample;
