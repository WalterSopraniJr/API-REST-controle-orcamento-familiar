const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

let db = [
    {'1': {cliente: 'Walter Soprani', idade: '26'}},
    {'2': {cliente: 'Beatriz Oliveira', idade: '24'}},
    {'3': {cliente: 'Jorge Mingatos', idade: '1'}}
];

//Busca Dados
app.get('/', (request, response) => {
    return response.json(db);
})

//Insere Dados
app.post('/add', (request, response) => {
    const body = request.body;

    if (!body) 
        return response.status(400).end()
    

    db.push(body)
    return response.json(body)
})

app.listen(3000, () => {
    console.log('Express started at http://localhost:3000')
});