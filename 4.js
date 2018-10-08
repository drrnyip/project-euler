// Largest palindrome product

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

const checkIfPalindrome = (number) => {
	const numberString = number.toString();
	for (let i = 0; i < numberString.length; i++) {
		if (i < numberString.length / 2 && numberString[i] != numberString[numberString.length - i - 1]) {
			return false;
		}
	}
	return true;
}

const first = 999;
const second = 999;

let largestPalindrome = 0;

let productOne = 0;
let productTwo = 0;

for (let i = first; i > 0; i--) {
	for (let j = second; j > 0; j--) {
		const product = i * j;
		const res = checkIfPalindrome(product);
		if (res && largestPalindrome < product) {
			largestPalindrome = product;
			productOne = i;
			productTwo = j; 
		}
	}
}

console.log(`Largest palindrome: ${largestPalindrome} | Product of ${productOne} * ${productTwo}`);
