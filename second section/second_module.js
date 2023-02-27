
function sayHello(message) {
    console.log('hello from second module' + message);
}

var name = 'bla';

// //to use in other modules
// exports.hi = sayHello;
// exports.endPoint = name;
// module.exports = sayHello;

//extending event
const EventEmitter = require('events');

class Logger extends EventEmitter {

    log(message) {
        console.log(message);

        //register ?

        //raise an event
        this.emit('logging', { id: 2 });
    }
}

// exports.Logger = Logger;
//module.exports =Logger
//and work for this module as class

module.exports = {
    sayHello,
    name,
    Logger
}

// console.log(module);