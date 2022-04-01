require('dotenv').config()
const connection = require('../database/connection')
// console.log(connection)

const responseModel = {
    success: false,
    data: [],
    error: []
}

module.exports = {

    async create(request, res) {
        const response = {...responseModel};

        const { username, password} = request.body;

        const [, affectRows] = await connection.query(`
            INSERT INTO users VALUES (DEFAULT, '${username}', '${password}', NOW(), NOW())
        `)

        response.success = affectRows > 0

        return res.json(response);
    },
    
    async login(request, res) {
        const response = {...responseModel};

        const {username, password} = request.body

        const [, data] = await connection.query(`
            SELECT * FROM users WHERE username='${username}' AND password='${password}'
        `)

        response.success = data.length > 0

        return res.json(data);
    }
}
