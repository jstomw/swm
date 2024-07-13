const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    console.log('Server requiest');
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');

    res.write('<h1>Hello mazafuckers!!!<h1/>');
    res.end();

    
});

server.listen(3000, 'localhost', (error) => {
    error ? console.log(error) : console.log('listening port ${port}');
});