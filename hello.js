const sayHello  = function (num) {
  for (let x = 1; x <= num; x++) {
  console.log("Hello, world");
  }

}

sayHello(10);


const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting);
