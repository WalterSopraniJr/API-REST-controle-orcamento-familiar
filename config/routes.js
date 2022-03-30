const { Router } = require('express')
const express = require('express')
const routes = express.Router()



// let db = [
//     {'1': {cliente: 'Walter Soprani', idade: '26'}},
//     {'2': {cliente: 'Beatriz Oliveira', idade: '24'}},
//     {'3': {cliente: 'Jorge Mingatos', idade: '1'}}
// ];

// //Busca Dados
// routes.get('/', (request, response) => {
//     return response.json(db);
// })

// //Insere Dados
// routes.post('/add', (request, response) => {
//     const body = request.body;

//     if (!body) 
//         return response.status(400).end();
    

//     db.push(body);
//     return response.json(body);
// })

// routes.delete('/:id', (request, response) => {
//     const id = request.params.id

//     let newDB = db.filter(item => {
//         if(!item[id])
//             return item
//     })

//     db = newDB
    
//     return response.send(newDB)
// })


const UserController = require('../controllers/UseController')

routes.post('/create', UserController.create)
routes.post('/login', UserController.login)

module.exports = routes