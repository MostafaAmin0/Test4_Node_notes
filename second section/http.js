const http = require('http');

let course = [
    { id: 1, name: 'compilers' }
];

//has all capapilities of event emitter
// const server = http.createServer();

// server.on('connection', (socket) => {
//     console.log('new connection');
// });

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello world');
        res.end();
    }
    if (req.url === '/api/courses') {
        res.write(JSON.stringify(course));
        res.end();
    }
    if (req.url === '/bla') {
        res.write(JSON.stringify(['bla']));
        res.end();
    }
    if (req.url === '/delete') {
        course = [];
        res.write(JSON.stringify(['Ok']));
        res.end();
    }
});

server.listen(3000);
console.log('Listening on port 3000');



