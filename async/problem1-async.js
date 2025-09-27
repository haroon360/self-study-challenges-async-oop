/**
 * CHALLENGE 3: Sum After Delay
 * Create a function `sumAfterDelay` that takes two numbers and a delay
 * (in milliseconds) as arguments. It should return a promise that resolves
 * with the sum of the two numbers after the specified delay.
 */

function sumAfterDelay(num1, num2, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num1 + num2);
    }, delay);
  });
}


// UNCOMMENT THESE LINES TO CHECK YOUR WORK
sumAfterDelay(5, 10, 1000)
  .then((sum) => console.log(sum)) // should log 15 after 1 second
  .catch((error) => console.error('Error:', error));
