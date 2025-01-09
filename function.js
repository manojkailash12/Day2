//function without parameters
function demo(){
    console.log("function is executing...");
}
demo();
//with parameters
function add(a,b){
    console.log(a+b);
}
add(5,6);
add(12+3);

//function expression
let x = function(){
    console.log("anonymus is not executing but executing with variable")
}
x();

//IIFE
(
    function(){
        console.log("IIFE");
    }
)();

//arrow function 
// let x = a =>console.log("Arrow function");
// x(4);

//implicit returns and explicit returns 

function test1(a,b){
    return a+b;
}
console.log(test1(5,5));