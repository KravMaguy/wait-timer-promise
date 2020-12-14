function greating(name) {
  console.log("hello ", name);
}

function printGreating() {
  greating("yakhousam");
}

//printGreating(); // print "hello yakhousam"

// now I want to wait 1 second before calling greating

function printGreatingWaitOneSecond() {
  setTimeout(() => {
    greating("yakhousam");
    setTimeout(() => {
      greating("abe");
    }, 1000);
  }, 1000);
}

printGreatingWaitOneSecond(); // print "hello yakhousam" after one second

// it works great. but imagine we have more code. we will put everything
// inside the setTimeout. if we have to wait for another function we will
// put another setTimout inside a setTimout etc.. the code will be hard to read and maintain
// this is what we call callbacks hell (setTimeout accept a callback function)

// to solve the problem we will create a function "wait" that returns a promise

function wait(ms) {
  return new Promise(function (resolve, reject) {
    return setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function printGreatingPomise() {
  await wait(1000 * 2);
  greating("yakhousam");
  await wait(1000 * 2);
  greating("abe");
}

// printGreatingPomise();
