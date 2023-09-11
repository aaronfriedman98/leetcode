// Description - create a function that sleeps for a given amount of miliseconds and then resolves
// params - {number} millis
// return - resolve a promise

async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve, millis))
  }
  
  let t = Date.now();
  sleep(100).then(() => {
    console.log(Date.now() - t); // 100
  });