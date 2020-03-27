const express = require('express');
const cors = require('cores')
const routes = require('./routes');

const app = express(); 
app.use(cors()); 
app.use(express.json());
app.use(routes);

/* Métodos HTTP:

GET: buscar informação no back-end
POST:  criar informação no back-end
PUT: alterar informação no back-end
DELETE: deletar informação no back-end


Tipos de parâmetros:

Query Params: Parâmetros nomeados enviados na rota após o "?" (filtros, paginação)
Route Params: Parâmetros utilizados para identificar recursos
Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 
SQL: MYSQL, SQLite, POstgreSQL, Oracle, ...
NoSQL: MongoDB, CouchDB, ...

*/


app.listen(3333);