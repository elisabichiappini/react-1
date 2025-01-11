/*creare un server*/
//importo un modulo
const http = require("http");

//istanzio un server
const server = http.createServer((req, res) => {
    console.log(`${req.method} | ${req.url} effettuata`);
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("<h1>Hello world</h1>");
});
//quando è pronto dico accenditi/resta in ascolto
server.listen(8888, 'localhost', () => {
    console.log('Server avviato su http://localhost:8080');
});

/*
node server.js
Server avviato su http://localhost:8080
GET | / effettuata
GET | /favicon.ico effettuata
GET | / effettuata
GET | /favicon.ico effettuata

*/