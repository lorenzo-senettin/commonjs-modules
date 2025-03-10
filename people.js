const fullName = require("./name");
const hobbies = require("./hobbies");

function createPerson() {
  return {
    fullName: fullName("Lorenzo", "Oznerol"),
    hobbies: hobbies("Ice Skating", "Golf", "Baseball")
  };
}

console.log(createPerson());