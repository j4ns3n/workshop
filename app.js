let time = 0;

let timer = setInterval(function(){
    time += 2;
    console.log(time + " 3 second have passed");
    if (time > 5){
        clearInterval(timer);
    }
}, 2000);

// normal funchtion statement

function sayHi(){
    console.log("hi");
}

sayHi();

let sayBye = function (){
    console.log('bye');
};

function callFunction(fun){
    fun();
};

callFunction(sayBye);

let events = require('events');

let myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(mssg){
    console.log(mssg);
});

myEmitter.emit('someEvent', 'the event was emmitted');
