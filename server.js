/*creare un server*/
//importo un modulo
const http = require('http');

//istanzio un server
const server = 
http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-type": "text/html"
    });
    res.end("<h1>Hello world</h1>");
});
//quando è pronto dico accenditi/resta in ascolto
server.listen(8080, 'localhost', () => {
    console.log('Server avviato su http://localhost:8080');
})