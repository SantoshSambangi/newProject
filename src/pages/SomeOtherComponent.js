// SomeOtherComponent.js
import React, { useState } from 'react';
import MyReusableComponent from './MyReusableComponent';


const SomeOtherComponent = () => {

    const [data, setData] = useState(false)
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <div>
      <h1>Using My Reusable Component</h1>
      <MyReusableComponent data={data} setData={setData} handleClick={handleClick} />
    </div>
  );
};

export default SomeOtherComponent;
