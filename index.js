//const numbers = [1, 2, 3, "bashayer", [100, 200, 300]];

// numbers.push(7);
// numbers.push("aki");
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
// numbers.pop();

// console.log(numbers);
// console.log(numbers.length);
//console.log(numbers[numbers.length - 1]); get the lat element of the array

//new method called indexof()
const numbers = [10, 200, 300, 400, 500, 1000];
console.log(numbers.indexOf("bashayer"));
console.log(numbers.indexOf("br")); //if return -1 means not in the array
//numbers.length = 0 ; //i will delet all the values and empty the array
console.log(numbers.slice(0, 1)); // output : [10]
console.log(numbers.slice(0, numbers.length / 2)); //output : [10, 200, 300, 400, 500, 1000]
console.log(numbers.slice(0, numbers.length - 1)); //output : [10, 200, 300, 400, 500]
console.log(numbers.slice(numbers.length)); //output :[] becase like i said cut from index 6
