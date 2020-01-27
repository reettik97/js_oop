# Inheritance

User
  -properties
    -name
    -score
  -methods
    -increaseScroe: returns score increased by 1
    -decreaseScore: returna score decreased by 1

PaidUser
  -properties
    -name
    -score
    -balance
  -methods
    -increaseScroe: returns score increased by 1
    -decreaseScore: returna score decreased by 1
    -increaseBalance: returna balance decreased by 1

Using Inheritance convert the above into following patterns.

1. Prototypal Pattern
2. Pseudoclassical Pattern
3. Classes

Prototypal:
===========================================================================
```js
let userMethods ={
  scoreIncrement : function(){
    this.score +=1;
    return this.score;
  } ,
  scoreDecrement : function(){
    this.score -= 1;
    return this.score;
  }
}
let paidUserMethods = {
  balanceIncrement : function(){
    this.balance += balance;
    return this.balance;
  },
  balanceDecrement : function(){
    this.balance -= balance;
    return this.balance;
  }
}

function createUser(name , score){
 let obj = Object.create(userMethods);
  obj.name = name;
  obj.score = score;
  return obj;
}

function createPaidUser(name , score =0 , balance = 0){
  let obj = createUser(name , score);
  obj.balance = balance;
  Object.setPrototypeOf(obj , paidUserMethods);
  Object.setPrototypeOf(paidUserMethods , userMethods);
  return obj;
}
```

==============================================================================
Pseudoclassical Pattern
```js
 function createUser(name , score){
   this.name = name;
   this.score = score;
 }
 createUser.prototype = {
    incrementScore : function(){
      this.score +=1;
      return this.score;
    },
     decrementScore : function(){
      this.score -=1;
      return this.score;
    }
 }
 function createPaidUser(name , score , balance){
   createUser.call(this , name , score)
   this.balance = balance;
 }
 createPaidUser.prototype = {
    incrementBalance : function(){
      this.balance += 1;
      return this.balance;
    },
    decrementBalance : function(){
      this.balance -= 1;
        return this.balance;
    }
 }

 Object.setPrototypeOf(createPaidUser.prototype , createUser.prototype);
```
=============================================================================
Classes

```js
class user{
  constructor(name , score){
    this.name = name;
    this.score = score;
  }
  incrementScore(){
    this.score +=1;
    return this.score;
  }
  decrementScore(){
    this.score -=1;
    return this.score;
  }
}
class paidUser extends user{
  constructor(name , score , balance){
    super(name , score);
    this.balance = balance
  }
  incrementBalance(){
    this.balance += 1;
    return this.balance;
  }
  decrementBalanace(){
    this.balance -= 1;
    return this.balance;
  }
}

```