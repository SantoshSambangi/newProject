import React, { useState } from "react";

const Prepration = () => {
  let x = 10;
  {
    // console.log(x);
    let x = 20;
    console.log(x);
  }

  function left() {
    return console.log("left");
  }
  function right() {
    return console.log("right");
  }

  left() || right();
  console.log("or || operator and && operator");
  left() && right();

  //   function shuffleArr(arr){
  //     const randomCompare = () => {
  //         Math.random() - 0.5;
  //         return arr.sort(randomCompare)
  //     }
  //   }

  //   const result = shuffleArr(arr);
  //   console.log(result)

  const data = [{ sum: 1 }, { sum: 2 }, { sum: 6 }];

  const res = data.reduce((acc, cur) => {
    return acc + cur.sum;
  }, 0);

  console.log(res);

  const arr = [1, 2, 3, 4, 5];
  const result = arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  console.log(result);
  //array methods
  const arr1 = ["santosh", "subha", "dileep", "hrithika"];

  console.log(
    "pop it remove last ele of arr and return removed item " + arr1.pop()
  );
  console.log(
    "push it add the ele at last index and return Length  " + arr1.push()
  );
  console.log(
    "shift it remove first ele of arr and return removed item " + arr1.shift()
  );
  console.log(
    "unshift it add the ele at first index and return Length " + arr1.unshift()
  );

  //Toggle password
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  //otp Generator

  function generateOtp(length) {
    let OTP = "";
    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * 10);
      OTP = OTP + randomNumber.toString();
    }
    return OTP;
  }
  console.log(generateOtp(6));
  console.log(generateOtp(4));
  //factor

  const obj = {
    data: [1, 2, 3],
    processData: function () {
      this.data.forEach((num) => {
        console.log(num * this.factor);
      });
    },
    factor: 2,
  };

  obj.processData();

  //map filter reducer

  const arr2 = [1, 2, 3, 4, 5];

  const doubledArr = arr2.map((num) => {
    return num * 2;
  });

  console.log(doubledArr); // Output: [2, 4, 6, 8, 10]
  console.log(arr2); // Output: [1, 2, 3, 4, 5]

  const filterdArr = arr2.filter((num) => {
    if (num % 2 == 1) {
      return num;
    }
  });
  console.log(filterdArr); // Output: [1,3,5]
  console.log(arr2); // Output: [1, 2, 3, 4, 5]

  const redArr = arr2.reduce((acc, cur) => {
    return acc * cur;
  }, 1);
  console.log(redArr); // output: 15 || 120

  // arrray methods

  const array = [1, 2, 3, 4, 5];
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    sum += element;
  }

  console.log(sum);

  //?? Null coalescing

  function first(){
    console.log("first");
    return true;
  }
  function second(){
    console.log("second");
    return false;
  }

  console.log(first() ?? second());

  
  return (
    <div>
      <h1>Technical Questions</h1>

      <div className="box"></div>

      <div>
        <input id="pass" type={showPassword ? "text" : "password"} />
        <input id="check" type="checkbox" onClick={togglePassword} />
      </div>

      <div className="box1"></div>

      <div className="spinner"></div>
    </div>
  );
};

export default Prepration;
