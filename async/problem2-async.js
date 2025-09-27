/**
 * CHALLENGE 4: Simulate API Call
 * Create a function `simulateAPICall` that takes no arguments.
 * It should return a promise that resolves with the string 'Data received'
 * after a random delay between 1 and 3 seconds.
 */

function simulateAPICall() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data received')
        }, ) // insert delay time here 
    })
}

// UNCOMMENT THESE LINES TO CHECK YOUR WORK
// simulateAPICall()
//   .then((message) => console.log(message)) // should log 'Data received' after a random delay between 1 and 3 seconds
//   .catch((error) => console.error('Error:', error));

  let delayTime = Math.random() * 2000 + 1000;
  console.log(delayTime);