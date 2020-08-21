//
//
const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'Pablo',
        apellido: 'Albani',
        edad: 43,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    // res.write(`<h1> Hola mundo</h1>`)
    res.end(); //con esto le informamos que ya terminamos de armar la respuesta
}).listen(3000);

console.log('Servidor escuchando');