
// // Hoisting


// console.log(person);

// var person="Susmitha";


// // console.log('Nishitha');


// // function getName() {
// //     var a = '234'
// //     console.log(a);
// // }

// // var getName = function() {
// //     var a = '234'
// //     console.log(a);
// // }

// var getName = () => {
//     var a = '234'
//     console.log(a);
// }

// getName();


// var person = 'Susmitha';

// console.log(person);

// function getFirstName() {
//     var person = 'Nishitha';
//     var person = 'Susmitha Reddy'
//     console.log(person);
// }

// function getLastName() {
//     var person = 'Nishitha1';
//     var person = 'Susmitha Reddy1'
//     console.log(person);
// }

// getLastName();

// getFirstName();

// var person;

// console.log(person);

// person = 'Susmitha';

// console.log(person);

// person = undefined;

// var number = 1;

// console.log(window.number);

// number = "Susmitha Reddy"

// console.log(window.number);

// if(number === undefined) {
//     console.log("number is undefined")
// } else {
//     console.log("NA")
// }

// var number = 2;

// function addTwoNumbers(num) {
//   var result = num + number;
//   console.log('result', result)
// }

// const addTwoNumbers = () => {
//     var result = num + number;
//     console.log('result', result)
// }

// const addTwoNumbers = (num) => {
//     var result = num - number;
//     console.log('result', result)
// }

// addTwoNumbers(3);

// Scope

// function a() {
//   console.log(b); // 10
//    c();
//    function c() {
//     console.log(b); // 10
//    }
// }

// var b = 10;
// a();

// Let and Const

// let person = 'Susmitha';
// var person = 'Nishitha';

// const a = 10;
// console.log(a);

// let b;
// b = 1000;
// console.log(b);

// // const c = 3000;
// // console.log(c);

// function name() {
//     let a;
//     a=100;
// }
// name();

// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a); 
//     console.log(b);
//     console.log(c);
// }

// console.log(a); 
//     console.log(b);
//     console.log(c);


// let b = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a); 
//     console.log(b);
//     console.log(c);
// }

// function abc() {
//     var a = 1000;
//     function x() {
//         var b = 20;
//         y();
//         function y() {
//          console.log(a);
//         }
//     }
//     x();
// }
// abc();

// this

let name = {
   firstName: 'Susmitha',
   lastName: 'M',
   hometown: 'Andhra'
}

let printFullName = function (hometown) {
    console.log(this.firstName + " " + this.lastName + " " + hometown)
}

printFullName.call(name , "Andhra");

let name2 = {
    firstName: 'Javascript',
    lastName: 'React'
}

printFullName.apply(name2, ['Hometown']);

// bind method

var getName = printFullName.bind(name, "Tamilnadu");

getName();

// Function Statement and Function Declaration
a();

 function a() {
    console.log("a called here") //
 }


 // Function Expression
 
 var b = function () {
   console.log("b called here"); //
 }

 b();


// Data types
var string = "";
var number = 1;
var flag = true/false
var object = {
    firstName: "Susmitha Reddy",
    secondName: "",
}
// console.log(object.firstName);
var nodata = null;
var array = [];

function printFirstName(myName, params, name1) { // parameter
  console.log(myName + " " + name1 + " " + params.firstName + " is good at " + params.skills['html'] + " and " + params.skills.javascript);
//   console.log(params.skills);
}

printFirstName("Susmitha", {
    firstName: 'Dheeraj',
    skills: {
        html: 'html',
        javascript: 'javascript',
        frontend: {
            client: {

            },
            server: {

            }
        }
    }
}, "Nishitha"); // argument


// Anonymous Function


// Named Function Expression


var bbb = function xyz() {
    console.log('abc');
}

bbb(); // abc


// Firt class functions

var b = function(data) {
     console.log(data()); // 
}

function personnn() {
  console.log("I'm inside")
}

b(personnn);
