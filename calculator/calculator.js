let display = document.getElementById("result");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
let zerozero = document.getElementById("zerozero");

let add = document.getElementById("add");
let subtract = document.getElementById("sub");
let multiply = document.getElementById("mul");
let divide = document.getElementById("div");

let equals = document.getElementById("equals");
let ac= document.getElementById("ac");
let del= document.getElementById("del");
let dot= document.getElementById("dot");

one.addEventListener("click", () => {
    display.value += "1";
});

two.addEventListener("click", () => {
    display.value += "2";
});

three.addEventListener("click", () => {
    display.value += "3";
});

four.addEventListener("click", () => {
    display.value += "4";
});

five.addEventListener("click", () => {
    display.value += "5";
});

six.addEventListener("click", () => {
    display.value += "6";
});

seven.addEventListener("click", () => {
    display.value += "7";
});

eight.addEventListener("click", () => {
    display.value += "8";
});

nine.addEventListener("click", () => {
    display.value += "9";
});

zero.addEventListener("click", () => {
    display.value += "0";
});

zerozero.addEventListener("click", () => {
    display.value += "00";
});

del.addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});

ac.addEventListener("click", () => {
    display.value = "";
});

dot.addEventListener("click", () => {
    display.value += ".";
});

add.addEventListener("click", () => {
    display.value += "+";
});

subtract.addEventListener("click", () => {
    display.value += "-";
}); 
multiply.addEventListener("click", () => {
    display.value += "*";
});

divide.addEventListener("click", () => {
    display.value += "/";
});
equals.addEventListener("click", () => {
    display.value = eval(display.value);
});
    