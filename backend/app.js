/*---------------------------------------
UBICAMOS LOS REQUERIMIENTOS
--------------------------------------*/
require('./config.js');


const nodemailer = require("nodemailer");
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');


const app = express();
const path= require('path');

/*---------------------------------------
Middleware para Body Parser
--------------------------------------*/

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({limit:'10mb' ,extended:true}));

//parse application/json
app.use(bodyParser.json({limit:'10mb' ,extended:true}));

/*---------------------------------------
Middleware para File Upload
--------------------------------------*/

//Opciones por defecto
app.use(fileUpload());

/*---------------------------------------
Ejecutando CORS 
--------------------------------------*/

app.use(cors());

/*---------------------------------------
Mongoose Deprecations
--------------------------------------*/

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


/*---------------------------------------
Importamos las Rutas
--------------------------------------*/
app.use(require('./Routes/contact.route'));


/*---------------------------------------
Conexion a la base de Datos
--------------------------------------*/

// mongoose.connect('mongodb://localhost:4000/backend', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// },
// (err,res) =>{
//     if(err) throw err;

//     console.log("Conectado a la Base de Datos");

// }
// );

/*---------------------------------------
Salida puerto HTTP
--------------------------------------*/

app.listen(4000, ()=>{
    console.log(`Habilitado el puerto 4000`);
})