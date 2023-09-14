// //const numbers = [1, 2, 3, "bashayer", [100, 200, 300]];

// // numbers.push(7);
// // numbers.push("aki");
// // console.log(numbers);
// // numbers.pop();
// // console.log(numbers);
// // numbers.pop();

// // console.log(numbers);
// // console.log(numbers.length);
// //console.log(numbers[numbers.length - 1]); get the lat element of the array

// //new method called indexof()
// const numbers = [10, 200, 300, 400, 500, 1000];
// console.log(numbers.indexOf("bashayer"));
// console.log(numbers.indexOf("br")); //if return -1 means not in the array
// //numbers.length = 0 ; //i will delet all the values and empty the array
// console.log(numbers.slice(0, 1)); // output : [10]
// console.log(numbers.slice(0, numbers.length / 2)); //output : [10, 200, 300, 400, 500, 1000]
// console.log(numbers.slice(0, numbers.length - 1)); //output : [10, 200, 300, 400, 500]
// console.log(numbers.slice(numbers.length)); //output :[] becase like i said cut from index 6

//lesson ends here

//solving task start here :)

//Q1
const MyArray = [];
//Q2
MyArray.push("apple");
MyArray.push("banana");
MyArray.push("cherry");
console.log(MyArray);

//Q3
console.log(MyArray[0]);

//Q4
console.log(MyArray[MyArray.length - 1]);

//Q5
MyArray.unshift("mango");
console.log(MyArray);

//Q6

console.log(MyArray.pop());

//Q7
console.log("   Q7    ");
const numbers = [5, 10, 15, 20, 25];
const newNumbers = numbers.splice(2, 1);
console.log(newNumbers);
console.log(numbers);

//Q8
console.log("   Q8    ");

function arrayLengh(x) {
  return x.length;
}

console.log(arrayLengh(numbers));

//Q9

console.log("   Q9    ");
const temperatures = [72, 68, 74, 80, 76];
console.log(Math.max(...temperatures));

//Q10
console.log("   Q10    ");

//console.log(MyArray.indexOf("banana"));
if (MyArray.indexOf("banana") > 0) {
  console.log(true);
} else console.log(false);

//ends of task 1
