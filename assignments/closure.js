// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

// I got a little carried away...

let momsWallet = () => {
  let momsVisa = 0;
  let momsLimit = 100;

  let momApproves = (val) => {
    if (momsVisa + val < momsLimit) {
      return true;
    } else return false;
  }

  let spend = (val) => {
    if (momApproves(val)) {
      momsVisa += val;
      return `\$${val} charged to Mom's Visa. Remember that on Mother's Day!`;
    } else return "Mom says to ask your dad instead.";
  }

  let balance = () => {
    return `You currently owe Mom \$${momsVisa}.`;
  }
  
  return {
    spend: spend,
    balance: balance 
  };
};

console.log("==== Challenge 1: Write your own closure ====");
const wallet = momsWallet();
console.log(wallet.balance());
console.log(wallet.spend(75));
console.log(wallet.balance());
console.log(wallet.spend(20));
console.log(wallet.balance());
console.log(wallet.spend(50));
console.log(wallet.balance());


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.

  // Example usage: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let count = 0;

  return () => count++;
};

const newCounter = counter();
newCounter();
newCounter();
console.log(newCounter());
newCounter();
newCounter();
newCounter();
console.log(newCounter());



// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  let counter = 0;

  const increment = () => {
    counter++;
    return counter;
  }

  const decrement = () => {
    counter--
    return counter;
  }

  return {
    increment: increment,
    decrement: decrement
  }
};

const counterThing = counterFactory();
console.log(counterThing.increment());
console.log(counterThing.increment());
console.log(counterThing.decrement());