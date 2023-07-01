require('dotenv').config()
 /*Este nos va a servir para las cables imporantes que no queremos que se vean en el codigo.*/

const express = require('express')
/*Express proporciona meodos para especificar que funcion se llama para un verbo HTTP en particular
(GET, POST, PUT, SET, DELETE, etc.) y una ruta de acceso a la URL especificada y tambien metodos 
para especificar que motor de plantilla(vista) se usa, donde plantilla estan ubicados los archivos
 y que plantilla utilizar para representar una respuesta.*/
const mongoose = require('mongoose')
/*Mongoos es una biblioteca de modelado de datos de objetos(ODM) para MongoDB y Node.js.
esto nos proporcionara los Schemas para los datos y las funciones para interactuar con la base de datos.*/

const cors = require('cors')
/* CORS es un mecanismo para permitir o restringir los recursos solicitados en un servidor web 
dependiendo de donde se inicio la solicitud HTTP. Esta politica se utiliza para proteger un determinado
servidor web del acceso de otro sitio web o dominio. */

const app = express() //Definimos la constante app como una funcion de express que utilizara todos los metodos.

app.use(express.json()) // Decimos que nuestra app va a utilizar la comprencion de json.
//Siempre, la mayoria de las veces vamos a estar trabajando con archivos.json, con respuestas json, etc.

app.use(cors()) // Decimos que nuestra app va a utilizar las funcionalidades de cors.  

//-----PUERTO-----//

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("Server running on port", PORT)
});

/*En esas lineas de codigo estamos diciendo que nuestra app va a estar escuchando el "PORT" que seria el puerto
"3000" y que cuando este corriendo nos muestre un mensaje en la consola que diga "Server running on port 3000". */
