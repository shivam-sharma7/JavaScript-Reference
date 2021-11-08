// 1. way to print Javascript........................................................................................................

console.log("Hello World");

// 2. Javascript console API
console.log("Hello World", 5 + 5, 10 + 5, "Another log");
console.warn("This is a warning");
console.error("This is an error");

//3. Javascript variables? = Containers to store data values..........................................................................

var num1 = 85;
var num2 = 90;

console.log("Answer is =", num1 + num2);

// 4. Data type in Javascript...........................................................................................................

// Numbers
var numbers1 = 344;
var numbers2 = 23.45;

console.log(numbers1);
console.log(numbers2);

// String
var str1 = "This is a string data type";
var str2 = "This is a also string";


// Boolean
var a = true;
var b = false;
console.log(a, b);

// Undefined
var und;
console.log(und);

// Null
var n = null;
console.log(n);

/*..............................................................................................................................................
 At a very high level, there are two data types in JavaScript
1.Primitive data type: Undefined, null, number, string, boolean, symbol

2. Reference data types: Objects and Arrays

*/

// Object
var marks = {
  Shivam: 93,
  Suraj: 89,
  Satyam: 84
}

console.log(marks);

// Arrays
var arr = [1, 2, "Shivam", 3, 4, 5];
console.log(arr[3]);


// Operators in Javascript............................................................................................................................

// Arithmetic Operators

var num3 = 39;
var num4 = 19;
console.log("The value of num3 * num4 =", num3 * num4);
console.log("The value of num3 + num4 =", num3 + num4);
console.log("The value of num3 - num4 =", num3 - num4);
console.log("The value of num3 / num4 =", num3 / num4);

// Assignment Operators

var c = 10;
c += 2;
// c -= 2;
// c *= 2;
// c /= 2;
console.log(c);

// Comparison Operators

var y = 50;
var x = 70;
console.log(x == y);
console.log(x <= y);
console.log(x >= y);

// Logical Operators

// Logical and
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

//Logical Or
console.log(true || false);
console.log(false || true);
console.log(true || true);
console.log(false || false);

// Logical NOT
console.log(!false);
console.log(!true);

// Functions in JavaScript..........................................................................................................................


function avg(a, b) {
  c = (a + b) / 2;

  return c;
}

// DRY = Do not repeat yourself

c1 = avg(50, 10);
c2 = avg(2, 10);
console.log(c1, c2);

// Conditional in JavaScript............................................................................................................................

var age = 18;
if (age >= 18) {
  console.log("You can Vote now!");
} else {
  console.log("You Can't Vote now!");
}

// Loops in JavaScript.....................................................................................................................................

var arr = [1, 2, 3, 4, 5, 6, 7];

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arr.forEach(function (element){
//   console.log(element);
// })

// let j = 0;
// while (j<arr.length) {
//   console.log(arr[j]);
//   j++;
// }

// let k =0;
//
// do{
//   console.log(arr[k]);
//   k++
// }while(k <arr.length);


// Array Methods in JavaScript..........................................................................................................................
let myArr = ["Fan", "Cammera", 50, null, true];

console.log(myArr.length);

// myArr.pop();
// myArr.push("Shivam");
// myArr.unshift("Shivam");

 myArr.toString ();
 console.log(myArr);


// String method in Javascript.............................................................................................................................
let myLovelyString = "Shivam is lazy boy";

// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("lazy"));

  // Date in Javascript.....................................................................................................................................
   myDate = new Date();

  console.log(myDate);
  console.log(myDate.getFullYear());
  console.log(myDate.getDay());
  console.log(myDate.getMinutes());
  console.log(myDate.getHours ());

  // DOM Manipulation.......................................................................................................................................

  let elem = document.getElementById('click');
  console.log(elem);

  let elemClass = document.getElementsByClassName('container');
  console.log(elemClass);

  elemClass[0].style.background = 'Yellow';
