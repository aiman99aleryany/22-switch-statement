// Create a variable called primitive and assign it a value. Check if the value is a numeric, string or boolean type and print it in the console.

// let primitive = 1;

// typeof primitive === "number" ? console.log("primitive is a Number") : 0;
// typeof primitive === "string" ? console.log("primitive is a String") : 0;
// typeof primitive === "boolean" ? console.log("primitive is a Boolean") : 0;
// we will convert the code above to a switch statement

let primitive = {};

switch (typeof primitive) {
  case "number":
    console.log("primitive is a Number");
    break;

  case "string":
    console.log("primitive is a String");
    break;

  case "boolean":
    console.log("primitive is a Boolean");
    break;

  default:
    console.log("primitive is unknown");
}
