

let counter = function(arr){
    return "there are " + arr.length + " elements in this array";
}

let adder = function(a,b){
    return `the sum of the 2 numbers is ${a+b}`;
};

let pi = 3.142;

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
}