import React from "react";

const PracticeYouTube = () => {
  //Q-1 Palindrome Number

  //type-1
  const isPalindrome = function (x) {
    // if (x < 0) return false;
    // return x === +x.toString().split("").reverse().join("");

    return x <= 0 ? false : x === +x.toString().split("").reverse().join("");
  };
  const res = isPalindrome(121);
  console.log("respon", res);

  //type-2
  function isRevers(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }

  console.log(isRevers("Santosh"));

  //type-3
  const y = function isRevers(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return str === reversed;
  };

  const result = y("racecar");
  console.log("y", result);

  //Q2 Fibonacci seriece

  var fibo = function (n) {
    const arr = [0, 1];
    for (let i = 2; i <= n; i++) {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr;
  };
  console.log(fibo(10));

  //Q Recursion

  const recor = function (n) {
    if (n <= 1) return n;
    return recor(n - 1) + recor(n - 2);
  };
  console.log(recor(8));

  // Q anagrams

  const isAnagram = function (s, t) {
    const res1 = s.split("").sort().join("");
    const res2 = t.split("").sort().join("");
    return res1 === res2;
  };

  console.log(isAnagram("listen", "silent"));

  const isanagram = function (s, t) {
    if (s.length !== t.length) return false;
    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < s.length; i++) {
      obj1[s[i]] = (obj1[s[i]] || 0) + 1;
      obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }

    for (const key in obj1) {
      if (obj1[key] !== obj2[key]) return false;
    }
    return true;
  };

  console.log(isanagram("silent", "listen"));

  const z = function ispalindrome(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return str === reversed;
  };
  const palin = z("racecar");
  console.log("z", palin);

  return (
    <div>
      <h1>Coding Questions</h1>
    </div>
  );
};

export default PracticeYouTube;
