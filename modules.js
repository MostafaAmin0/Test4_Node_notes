console.log("bla bla");

/*
* install package global with (-g) flag but not recommended  like axios
npm i package -g

* install package for developer only "not direct dependence" like nodemon
npm i package --save-dev
*
*/

//to get all module details
// console.log(module);

//load module and use function
//module should be constant
const secondModule = require('./second');

// console.log(secondModule);
// secondModule.sayHello(' and this from first');

//if returende as objects
// secondModule('message');

//-------------------------------------------
//path module "built in"
const path = require('path');

const pathObj = path.parse(__filename);
// console.log(pathObj);

//-------------------------------------------
//os module
const os = require('os');

const totalMemory = os.totalmem();
const freeMemory = os.freemem();
// console.log(os.uptime());
// console.log(totalMemory);
// console.log(freeMemory);

//-------------------------------------------
//file system
const fs = require('fs');
const readFromSync = fs.readdirSync('.');
// console.log(readFromSync);

fs.readdir('../', (error, files) => {
    if (error) {
        console.log(error);
    }
    // console.log(files);
});

//-------------------------------------------
//event module
const EventEmitter = require('events');
const emitter = new EventEmitter();

//order is very important here

//register a listener
emitter.on('messageLogged', (arg) => {
    console.log('listener', arg);
});

//register a listener
emitter.on('function', (arg) => {
    console.log('listener in function', arg);
});

//raise an event
// emitter.emit('messageLogged', { id: 1, url: 'bla' });

//-----------------------------------------------
//extending event class
//from second module

const logger = new secondModule.Logger();
logger.on('logging', (arg) => {
    console.log('listener from extending event class', arg);
});

logger.log('message');

//---------------------------------------------




