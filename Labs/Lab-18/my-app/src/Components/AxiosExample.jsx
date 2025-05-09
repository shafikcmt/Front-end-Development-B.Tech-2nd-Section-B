import React, { useEffect, useState } from "react";
import axios from "axios";

function AxiosExample() {
  const [data, setData] = useState({ fname: "", lname: "" });
  const [posts, setPost] = useState([]);
  useEffect(() => {
    // axios.get()
    // axios.post()
    // axios.put()
    // axios.delete()
    // axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
    //   console.log(response.data);
    //   setPost(response.data);
    // });
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", data)
      .then((response) => {
        console.log(response);
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("https://jsonplaceholder.typicode.com/users/1", data)
      .then((response) => {
        console.log(response);
      });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div>
      <h1>Axios Example</h1>
      <h2>Posts</h2>
      {/* {posts.map((post) => (
        <h5>{post.title}</h5>
      ))} */}
      <h2>Example Post Method</h2>

      <form onSubmit={handleSubmit}>
        First Name: <input name="fname" onChange={handleChange} type="text" />
        <br />
        Last Name: <input name="lname" onChange={handleChange} type="text" />
        <br />
        <button type="submit">Submit</button>
        <button type="submit" onClick={handleUpdate}>
          Update
        </button>
        <hr />
        <button onClick={handleDelete}>Delete</button>
      </form>
    </div>
  );
}

export default AxiosExample;
