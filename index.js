const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./config/routes');
const { proppatch } = require('./config/routes');
require('dotenv').config()


const protocol = process.env.PROTOCOL || "http"
const ip = require('ip').address()
const port = process.env.PORT || 3000

const app = express();

console.log(protocol)

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
app.use(routes)


app.listen(port, () => {
    console.log(`Express started at http://localhost:${port} or ${protocol}://${ip}:${port}` )
});

