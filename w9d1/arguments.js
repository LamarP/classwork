//Sum

function sum() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

function sum(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}


console.log(sum(1, 2, 3, 4)); //=== 10;
console.log(sum(1, 2, 3, 4, 5)); //=== 15;

Function.prototype.myBind = function (context) {
    const that = this;
     let bindArgs = Array.from(arguments).slice(1)
    return function () {
       let callArgs = Array.from(arguments)
      return that.apply(context, bindArgs.concat(callArgs));  
    };
  };

// Function.prototype.myBind = function (context, ...bindArgs) {
//     const that = this;
//     return function (...callArgs) {
//         console.log(bindArgs)
//         console.log(callArgs)
//       return that.apply(context, bindArgs.concat(callArgs));  
//     };
//   };

  class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");
  
  markov.says("meow", "Ned");
  // Markov says meow to Ned!
  // true
  
  // bind time args are "meow" and "Kush", no call time args
  markov.says.myBind(pavlov, "meow", "Kush")();
  // Pavlov says meow to Kush!
  // true
  
  // no bind time args (other than context), call time args are "meow" and "a tree"
  markov.says.myBind(pavlov)("meow", "a tree");
  // Pavlov says meow to a tree!
  // true
  
  // bind time arg is "meow", call time arg is "Markov"
  markov.says.myBind(pavlov, "meow")("Markov");
  // Pavlov says meow to Markov!
  // true
  
  // no bind time args (other than context), call time args are "meow" and "me"
  const notMarkovSays = markov.says.myBind(pavlov);
  notMarkovSays("meow", "me");
  // Pavlov says meow to me!
  // true

function curriedSum(numArgs){
let numbers = [];

    function _curriedSum(n){
        numbers.push(n);
       
        if (numbers.length === numArgs){
            let result = 0;
            numbers.forEach(num => result += num);
            return result;
        } else {
            return _curriedSum;
        }
    }
    return _curriedSum;
}

const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1)); // => 56

Function.prototype.curry = function(numArgs){
let args = [];
let that = this
    function _curried(n){
        args.push(n);       
        if (args.length === numArgs){        
            return that.apply(null, args);
        } else {
            return _curried;
        }
    }
    return _curried;
}

const sumC = sum.curry(4);
console.log(sumC(5)(30)(20)(1)); 
