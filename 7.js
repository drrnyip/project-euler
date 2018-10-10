// 10001st prime

// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10001st prime number?

const checkIfPrime = (number) => {
	if (number < 2) {
		return false;
	} else if (number == 2) {
		return true;
	} else if (number % 2 == 0) {
		return false;
	} else {
		for (let i = 3; i < number; i += 2) {
			if (number % i == 0) {
				return false;
			}
		}
		return true;
	}
}

let primeArray = [];

const target = 10001;

let count = 0;

while (primeArray.length < target) {
	if (checkIfPrime(count)) {
		primeArray.push(count);
	}
	count++;	
}

console.log(`${target}st prime is ${primeArray[primeArray.length - 1]}`);
