// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?


const findMaxPrime = (n) => {
	let i = 2;
	while (i <= n) {
		if (n % i == 0) {
			n /= i;
		} else {
			i++;
		}
	};
	return i;
}

const target = 600851475143;

let max = 0;
let primes = [1, 2];

const result = findMaxPrime(target);

console.log(`Max: ${result}`);