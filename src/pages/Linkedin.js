import React from "react";

const Linkedin = () => {
  // Removed Char at string
  let OriginalString = "HeLllo WorldL";
  let removedChar = OriginalString.replace(/l/gi, "");
  // console.log(removedChar);

  //specifed index and concatenating the remain parts

  let OriginalStr = "hello world";
  let indexToRemove = 3;
  let removedCharecters =
    OriginalStr.slice(0, indexToRemove) + OriginalStr.slice(indexToRemove + 1);
  // console.log(removedCharecters);

  //using reg exppres tp remove all non-numeric char frm string

  let str = "hello 123 world";
  let removeNumeric = str.replace(/\D/gi, "");
  // console.log(removeNumeric);

  let arr = [8, 4, 5, 6, 7, 2];
  let ans = arr.reduce((a, b) => a + b);
  // console.log("unique number is", ans);

  let answer = arr.reduce((acc, de) => {
    return acc + de;
  }, 0);
  // console.log(answer);

  //getter and setter methods in JS

  const student = {
    firstname: "santosh",

    get getName() {
      return this.firstname;
    },
  };
  // console.log(student.firstname);
  // console.log(student.getName);
  // console.log(student.getName()); //error

  const employ = {
    firstname: "Sambangi",
    set changeName(newName) {
      this.firstname = newName;
    },
  };

  // console.log(employ.firstname);
  // employ.changeName = "sksk";
  // console.log(employ.firstname);

  //object define property

  const employer = {
    firstname: "Adarsh",
  };

  Object.defineProperty(employer, "getName", {
    get: function () {
      return this.firstname;
    },
  });

  Object.defineProperty(employer, "setName", {
    set: function (value) {
      this.firstname = value;
    },
  });

  console.log(employer.firstname);
  console.log(employer.getName);
  employer.setName = "Karthik";
  console.log(employer.firstname);
  console.log(
    "innerHeight " + window.innerHeight,
    "innerWidth " + window.innerWidth
  ); // my Laptop innerHeight= 585 innerWeight = 1280;
  console.log(
    "outerHeight " + window.outerHeight,
    "outerWidth " + window.outerWidth
  ); // my Laptop outerHeight= 672; outerWeight = 1280;

  console.log(window);
  console.log(document);
  console.log(navigator);
  // console.log(this);

  return (
    <div>
      <h2>Linkedin Preparation</h2>
    </div>
  );
};

export default Linkedin;
