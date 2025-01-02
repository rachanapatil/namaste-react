import React, { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: Hinganghat</h3>
      <h4>Contact: @RachanaPatil</h4>
      <p>Count: {count}</p>
    </div>
  );
};

export default User;
