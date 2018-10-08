// Smallest multiple

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const isDivisible = (number, target) => {
	return (number % target == 0);
}

const high = 20;
const low = 1;
let answer = high;

for (let i = high; i >= low; i--) {
	if (!isDivisible(answer, i)) {
		answer += high;
		i = high;
	}
	if (i == low) {
		console.log(`Answer: ${high} = ${answer}`)
		return;
	}
}