const moment = require("moment");
const _ = require("lodash");
const axios = require("axios").default;

function add(a, b) {
  return a + b;
}

const subtract = (a, b) => {
  return a - b;
};

function square(n) {
  return n * n;
}

const awesomeProgrammingLanguagesAndFrameworksAndVersions = [
  {
    language: "JavaScript",
    framework: "React",
    version: subtract(20, 4),
  },
  {
    language: "JavaScript",
    framework: "Angular",
    version: add(2, 7),
  },
  {
    language: "Python",
    framework: "Django",
    version: "??",
  },
];

if (1 == 1) {
  if (2 == 2) {
    if (5 == 7) {
      if (4 == 3) {
        if (3 == 6) {
          console.log("I made it");
        }
      }
    }
  }
}

const numbers = [3, 4, 5, 6, 7, 8, 10];

const squaredNumbers = numbers.map(square);
console.table(squaredNumbers);

const talkAboutCode = (language) => (framework) => (version) =>
  `My favorite programming language is ${language} and I use the ${framework} framework, version ${version}.`;

// FIXME: REACT IS NOT A FRAMEWORK!!!! #HowDAREYou
console.log(talkAboutCode("JavaScript")("React")(add(16, 0)));
console.log(talkAboutCode("JavaScript")("Angular")(subtract(10, 2)));
