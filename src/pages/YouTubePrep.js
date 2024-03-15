import React from "react";

const YouTubePrep = () => {
  const arr = [2, 5, 3, 4, 7];

  const mapResult = 
  arr.map((ar) => {
      return ar + 2;
    })
    .filter((item, i) => {
      return item % 2 === 0;
    });

  const forEachResult = arr.forEach((ar, i) => {
    return ar + 2;
  });

  console.log(mapResult); //result got
  console.log(forEachResult); //undefined

  // var a = 50;
  // let b = 60;
  // console.log(a);
  // console.log(b);

  console.log(null == undefined); //true
  console.log(null === undefined); //false
  console.log(null); // null
  console.log(undefined); // undefined

  // Q: Flatten the Array

  let array = [
    [1, 2],
    [3, 4],
    [5, 6, [7, 8], 9],
    [10, 11, 12],
  ];

  let flattend = [].concat(...array);

  console.log(flattend);
  console.log(array.flat(2));

  //Q settimeout output with let varable it gives 0,1,2

  // function a() {
  //   for (let i = 0; i < 3; i++) {
  //     setTimeout(function log() {
  //       console.log(i);
  //     }, i * 1000);
  //   }
  // }
  // a();
  //Q with var variable it gives 3,3,3
  // function a() {
  //   for (var i = 0; i < 3; i++) {
  //     setTimeout(function log() {
  //       console.log(i);
  //     }, i * 1000);
  //   }
  // }
  // a();

  // // same output by using var initialization using index

  function a() {
    for (var i = 0; i < 3; i++) {
      setTimeout(
        (function (index) {
          return function log() {
            console.log(index);
          };
        })(i),
        i * 1000
      );
    }
  }
  a();

  //Q Call , apply & bind

  var person = {
    name: "Santosh",
    hello: function (things, dog) {
      console.log(this.name + " say Hello " + things + " mydog is " + dog);
    },
  };
  person.hello("SK"); // Santosh Say Hello Sambangi

  var alterEgo = {
    name: "Srikanth",
  };

  person.hello.call(alterEgo, "Sambangi"); // Srikanth Say Hello Sambangi its take arguments only
  person.hello.apply(alterEgo, ["Sambangi", "puppy"]); //Srikanth Say Hello Sambangi it takes array

  const newPerson = person.hello.bind(alterEgo);
  newPerson("myDear");

  function b() {
    for (var i = 0; i < 5; i++) {

      // setTimeout((
      //   function(ref){
      //     return function log(){
      //       console.log(ref)
      //     }
      //   })(i), i*1000)
      setTimeout(
        (function (index) {
          return function log() {
            console.log(index);
          };
        })(i),
        i * 1000
      );
    }
  }
  b();

  function c() {
    for (var i = 0; i < 5; i++) {
      setTimeout(
        (function (index) {
          return function log() {
            console.log(index);
          };
        })(i),
        i * 1000
      );
    }
  }
  c();

  for (let i = 1; i <= 2; i++) {
    setTimeout(function () {
      console.log(i);
    }, 100);
  }

  return (
    <div>
      <h1>InterView Practice Questions</h1>
    </div>
  );
};

export default YouTubePrep;
