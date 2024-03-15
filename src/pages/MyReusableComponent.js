// MyReusableComponent.js
import React, { useState } from 'react';

const MyReusableComponent = (props) => {
    const {data, setData, handleClick} = props;
  const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//     if (onClick) {
//       onClick();
//     }
//   };

const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
  };

  return (
    <div>
      <p>Count: {count}</p>
      <h2 onClick={() => setData(!data)}>{data  ? "Santosh" : "Adarsh"}</h2>
      <button style={buttonStyle} onClick={handleClick}>Increment Count</button>
    </div>
  );
};

export default MyReusableComponent;
