console.log(this.document === document); // Output :  true

console.log(this === window); //Output : true

var myFunction = function() {
  console.log(this);
};
myFunction(); // Output : window

function f1() {
  "use strict";
  return this;
}
console.log(f1() === window); //Output : false; (becouse this doesnot exist, return undefined)

function foo() {
  console.log("Simple function call");   
  console.log(this === window);
}

foo(); //Output :  
//"Simple function call"
//true;


console.log(this === window)(
  // Output : true;

  // This for IIFE
function() {
    console.log("Anonymous function invocation");
    console.log(this === window);
  }
)(); //Output :  

// This for IIFE in strict mode
function foo() {
  "use strict";
  console.log("Simple function call");
  console.log(this === window);
}

foo(); // Output :
//Simle function calls;
//false;

var myObject = {};
myObject.someMethod = function() {
  console.log(this);
};
myObject.someMethod();
 //output : myObject = {someMethod = function() {
  // console.log(this);
// } }


// This refers to the New Instance

function Person(fn, ln) {
  this.first_name = fn;
  this.last_name = ln;

  this.displayName = function() {
    console.log(`Name: ${this.first_name} ${this.last_name}`);
  };
}

let person = new Person("John", "Reed");
person.displayName(); // Output  : `Name: John Reed`;
let person2 = new Person("Paul", "Adams");
person2.displayName(); // Output : `Name: Paul Adams`;

//This refers to the invoker Object

function foo() {
  "use strict";
  console.log("Simple function call");
  console.log(this === window);
}

let user = {
  count: 10,
  foo: foo,
  foo1: function() {
    console.log(this === window); 
  }
};

user.foo(); // Output : 
//"Simple function call"
//false   (this points to user object)
let fun1 = user.foo1;  
fun1(); 
// Output : true  
user.foo1(); 
// Output : false 

//this will call apply and bind

this.x = 9;
var module = {
  x: 81,
  getX: function() {
    return this.x;
  }
};

module.getX(); // Output : 81

var retrieveX = module.getX;
retrieveX(); //Output : 9 

var boundGetX = retrieveX.bind(module);
boundGetX(); // Output : 81

// Call with new constructor

function Person(fn, ln) {
  this.first_name = fn;
  this.last_name = ln;

  this.displayName = function() {
    console.log(`Name: ${this.first_name} ${this.last_name}`);
  };
}

let person = new Person("John", "Reed");
person.displayName(); // Output : `Name: John Reed`
let person2 = new Person("Paul", "Adams");
person2.displayName(); //Output : `Name: Paul Adams`

person.displayName.call(person2); // Output : `Name: Paul Adams`

// Guess the output of the following

const a = {
  a: "a"
};
const obj = {
  getThis: () => this,  
  getThis2() {
    return this;
  }
};
obj.getThis3 = obj.getThis.bind(obj); 
obj.getThis4 = obj.getThis2.bind(obj);

obj.getThis(); // Output : window

obj.getThis.call(a); // Output :  window

obj.getThis2();  
//output :
// obj {
//   getThis: function;
//   getThis2: function;
//   getThis3: function;
//   getThis4: function;
// }


obj.getThis2.call(a);
// Output:
// { a :"a"}

obj.getThis3();
// Output : window

obj.getThis3.call(a);
// Output : window


obj.getThis4();
//output :
// obj {
//   getThis: function;
//   getThis2: function;
//   getThis3: function;
//   getThis4: function;
// }



obj.getThis4.call(a);
//output :
// obj {
//   getThis: function;
//   getThis2: function;
//   getThis3: function;
//   getThis4: function;
// }