// DSA In JavaScript

// 1: Array

console.log("----- \n");
console.log("Array \n");
console.log("----- \n");

var Arr1 = new Array("Hello", "Hey", 1, 3, 5);
var Arr2 = new Array("World", "Boys", 2, 4, 6);

for (var i = 0; i < Arr1.length || i < Arr2.length; i++) {
    console.log("Index of Element in Array 1 and Array 2: " + i);
    console.log(Arr1[i] + " " + Arr2[i]);
}

/*
--> This is program for printing togather the same index number elemnts of array 1 and Array 2.
--> In this program, I made 2 Arrays
--> I made for loop for arranging elements of both Arrays togather.
--> When index number of both of Arrays are same then it will print that element. 
*/

console.log("");

// 2: String

console.log("------ \n");
console.log("String \n");
console.log("------ \n");

var Name = "Kunj Rana";
console.log("Name: " + Name);

var Ocupation = new String("Student");
console.log(Ocupation);

let Data = Name + " is " + Ocupation;
console.log(Data);

console.log(Data.indexOf("i")+"\n");

let str1 = "Hello World";

let arrString = ["My", "Name", "is", "Kunj"];

// Replacing the word 'World' with 'Kunj'
console.log(str1.replace("World", arrString[3]));

/*
--> In this program first printing Name and type.
--> After that it printing index of particular charactor
--> At 3rd place it take string and replace the word "World" with index 3 element of given Array.
*/
