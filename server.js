/*creare un server*/
//importo modulo
const dotenv = require("dotenv");
dotenv.config();
//importo un modulo
const http = require("http");
const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';
//istanzio un server
const server = http.createServer((req, res) => {
    console.log(`${req.method} | ${req.url} effettuata`);
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("<h1>Hello world</h1>");
});
//quando è pronto dico accenditi/resta in ascolto
server.listen(port, host, () => {
    console.log(`Server avviato su http:/${host}:${port}`);
});

/*
node server.js
Server avviato su http://localhost:8080
GET | / effettuata
GET | /favicon.ico effettuata
GET | / effettuata
GET | /favicon.ico effettuata

*/