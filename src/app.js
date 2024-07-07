const express = require('express');
const path = require ('path');
const morgan = require ('morgan');
const mysql = require ('mysql');
const myConnection = require ('express-myconnection');


const app = express();

//Importando rutas
const compradoresRoutes = require('./routes/compradores.js');
const productosRoutes = require('./routes/productos.js');

// Configuracion
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'crudluxperi'
}, 'single'));
app.use(express.urlencoded({extended: false}))

// Rutas
app.use('/api/compradores', compradoresRoutes);
app.use('/api/productos', productosRoutes);

//Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// Corriendo el servidor
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});