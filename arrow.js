function greet1() {
    console.log('greet1');
}
var greet2 = function () {
    console.log('greet2');
};
var greet3 = function () {
    console.log('greet3');
};
greet1();
greet2();
greet3();
var sum = function (num1, num2) { return num1 + num2; };
console.log(sum(1, 2));
var greet4 = function (name) { return console.log("Hello ".concat(name)); };
greet4('John');
