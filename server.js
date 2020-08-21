const express = require('express');
const app = express()
const hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 3000

/*__dirname le indica que tome toda la ruta donde se asigne en el servidor
y le concatene lo que sigue al + ej. (__dirname + '/public') */
app.use(express.static(__dirname + '/public'))

//es una función de hbs para usar parciales desde un lugar específico
hbs.registerPartials(__dirname + '/views/parciales');

//Express hbs engine
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'pablo',
        anio: new Date().getFullYear()
    });

});

app.get('/about', (req, res) => {

    res.render('about', {
        anio: new Date().getFullYear()
    });

});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
})