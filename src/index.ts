import { runChainOfResponsiblityPatternDemo } from "./chain-of-responsibility";

// runChainOfResponsiblityPatternDemo();

function primeFactors(n: number) {
  // print the number of 2s that divide n
  while (n % 2 == 0) {
    console.log(2);
    n = n / 2;

    // n must be odd at this point. So we can skip one element (let i = i +2)
    for (var i = 3; i * i <= n; i = i + 2) {
      // While i divides n, print i and divide n
      while (n % i == 0) {
        console.log(i);
        n = n / i;
      }
    }
    // This condition is to handle the case when n is a prime number
    // greater than 2
    if (n > 2) {
      console.log(n);
    }
  }
}

primeFactors(10); // prints '5' and '2'