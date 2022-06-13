import React, { useState } from 'react';

const Home = () => {
  const [name, setName] = useState();

  const handleClick = () => {
    const inp = document.getElementById('inp');
    setName(inp.value);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <input id="inp"></input>
      <p>{name}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
