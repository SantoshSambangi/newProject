import { object, string } from "prop-types";
import React, { useState } from "react";

const Instagram = () => {
  function x() {
    for (var i = 1; i < 5; i++) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
  }
  //   x();

  function c() {
    for (var i = 0; i < 5; i++) {
      setTimeout(
        (function (val) {
          return function log() {
            console.log(val);
          };
        })(i),
        i * 1000
      );
    }
  }
  //   c();

  const list = "apple,samsung;vivo@realme";

  //   const devices = list.split(",");
  const devices = list.split(/[,;@]/);
  //   console.log(devices);

  const arr = ["sk", "adarsh", 2, 4, 5, ""];

  const strings = arr.filter((item) => typeof item === "string");
  const numbers = arr.filter((item) => typeof item === "number");

  // console.log("Strings:", strings);
  // console.log("Numbers:", numbers);

  // function sum(num1,num2){
  //     return num1 + num2
  // }
  // console.log(sum(1,2,3,4))

  function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
      total += number;
    }
    return total;
  }
  console.log(sum(1, 2, 3, 4, 7, 8));

  const arr1 = [2, 4, 3, 5];

  const res = arr1.reduce((a, b) => {
    return a * b;
  }, 2);
  console.log(res);

  ///usestate

  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    // setCounter(counter + 2);
    // setCounter(counter + 1);
    // setCounter(counter + 3);

    setCounter((pre) => pre + 2);
    setCounter((pre) => pre + 2);
    setCounter((pre) => pre + 3);
  };

  const words = [
    "cat",
    "animal",
    "dogs",
    "cows",
    "donkey",
    "tiger",
    "ad",
    "lion",
  ];

  //   function findShortestWord(values) {
  //     return values.reduce((shortword, currentword) => {
  //       if (currentword.length < shortword.length) {
  //         return currentword;
  //       } else {
  //         return shortword;
  //       }
  //     }, values[0]);
  //   }

  //   console.log(findShortestWord(words));

  const shortestWord = words.reduce((a, b) => {
    if (a.length < b.length) {
      return a;
    } else {
      return b;
    }
  });
  console.log(shortestWord);

  const userRes = [
    { id: 1, name: "santosh" },
    { id: 2, name: "adarsh" },
  ];
  const users = userRes ?? []; // ?? calles Nullish Coalescing operator
  console.log(users);

  // object to array;

  const testData = {
    name: "santosh",
    age: 29,
  };
  console.log(Object.entries(testData));

  //Array to object
  const testData2 = [
    ["name", "santosh"],
    ["age", 29],
  ];
  console.log(Object.fromEntries(testData2));

  //technics

  const roles = ["admin", "user", "deskope", "software"];

  const user = {
    name: "amit",
    role: "admin",
  };
  if (roles.includes(user.role)) {
    console.log("do admin work");
  }

  const roleset = new Set(roles);
  if (roleset.has(user.role)) {
    console.log("he is admin");
  }

  // closures

  var a = 100;
  function xyz() {
    var c = 300;
    function abc() {
      console.log(a);
      console.log(c);
    }
    console.dir(abc);
  }
  xyz()
//   const result = xyz();
//   console.log(result);




  return (
    <div>
      <h1>Instagram coding preparation</h1>
      <h3>{counter}</h3>
      <button onClick={handleClick}>increase</button>

      <form>
        <input type="text" className="user" />
        <input type="password" className="pass" />
        <button>Login</button>
      </form>

      <input type="file" capture="environment"  />
    </div>
  );
};

export default Instagram;
