var shoutIt = function (name) {
  var shout = `Hello, ${name}, nice to meet you!`.toUpperCase();
  return shout;
};
console.log(shoutIt("CJ"));
console.log(shoutIt("Meg"));
console.log(shoutIt("Leia"));
console.log(shoutIt("Milo"));

var multiply = function (num1, num2) {
  if (typeof num1 !== "number") {
    return `You need to provide two numbers!`;
  } else if (typeof num2 !== "number") {
    return `You need to provide two numbers!`;
  } else {
    return num1 * num2;
  }
};
console.log(multiply(3.5, 7));
console.log(multiply("1.2", 7));
console.log(multiply(3.5, "7"));
console.log(multiply(-3.5, 7));
