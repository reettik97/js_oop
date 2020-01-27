/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/

function makePerson(name, age){
  //add code here
  let object = {};
  object.name = name;
   object.age = age;
    return object;                     
}

var vicky = makePerson('Vicky', 24);


// /********* Uncomment these lines to test your work! *********/
// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24





/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

var personStore = {
	// add code here
  greet: function(){
    console.log('hello');
  }
  
};
// /********* Uncomment this line to test your work! *********/
// personStore.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

function personFromPersonStore(name, age) {
	// add code here
  let obj = Object.create(personStore);
   obj.name = name;
   obj.age = age;
   return obj;
}

var sandra = personFromPersonStore('Sandra', 26);


// /********* Uncomment these lines to test your work! *********/
// console.log(sandra.name); // -> Logs 'Sandra'
// console.log(sandra.age); //-> Logs 26
// sandra.greet(); //-> Logs 'hello'



/*** CHALLENGE 3 of 3 ***/
personStore.introduce = function(){
  console.log("Hi, my name is " + this.name);
}
// add code here

// sandra.introduce(); // -> Logs 'Hi, my name is Sandra'





/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

function  PersonConstructor() {
	// add code here
  this.greet = function(){
    console.log("greet");
  }
}


// /********* Uncomment this line to test your work! *********/
var simon = new PersonConstructor;
// simon.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

function personFromConstructor(name, age) {
	// add code here
     this.name = name;
     this.age = age; 
  
}
PersonConstructor.prototype.greet = function(){
  console.log("hello");
}

var mike = new personFromConstructor('Mike', 30);


// /********* Uncomment these lines to test your work! *********/
// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); //-> Logs 30
// mike.greet(); //-> Logs 'hello'



/*** CHALLENGE 3 of 3 ***/
// add code here
personFromConstructor.prototype.introduce = function(){
  console.log("Hi, my name is " + this.name);
  return;
}

// mike.introduce(); // -> Logs 'Hi, my name is Mike'


/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

class PersonClass {
	constructor(name , age) {
    // add code here
   this.name = name;
   this.age = age;
	}
  greet(){
    console.log("hello");
    return;
  }
	// add code here
}


// /********* Uncomment this line to test your work! *********/
var george = new PersonClass;
// george.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/
class DeveloperClass extends PersonClass{
  constructor(name , age){
   super(name , age);
  }
  introduce = function(){
    console.log('Hello World, my name is '+ this.name);
  }
}
// add code here


// /********* Uncomment these lines to test your work! *********/
// var thai = new DeveloperClass('Thai', 32);
// console.log(thai.name); // -> Logs 'Thai'
// thai.introduce(); //-> Logs 'Hello World, my name is Thai'



/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

var userFunctionStore = {
  sayType: function() {
    console.log("I am a " + this.type);
  }
}

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = "User";
  user.name = name;
  user.score = score;
  return user;
}

var adminFunctionStore  = Object.create(userFunctionStore)/* Put code here */ ;

function adminFactory(name, score) {
  // Put code here
  let obj = new userFactory(name, score);
      obj.type = 'Admin';
      obj.sharePublicMessage = function(){
        console.log('Welcome users!');
      }
  return obj;
}

/* Put code here for a method called sharePublicMessage*/

var adminFromFactory = adminFactory("Eva", 5);

// /********* Uncomment these lines to test your work! *********/
// adminFromFactory.sayType() // -> Logs "I am a Admin"
// adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"
