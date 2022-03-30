const connection = require('../database/connection')

const responseModel = {
    success: false,
    data: [],
    error: []
}

module.exports = {

    async create(request, response) {
        const response = {...responseModel};

        const { username, password} = request.body;

        const [, affectRows] = await connection.query(`
            INSERT INTO users VALUES (DEFAULT, '${username}', '${password}', NOW(), NOW())
        `)

        response.success = affectRows > 0

        return response.json(response);
    },
    
    async login(request, response) {
        const response = {...responseModel};

        const {username, password} = request.body

        const [, data] = await connection.query(`
            SELECT * FROM users WHERE username='${username}' AND passwords='${password}'
        `)

        console.log(data)

        return response.json(response);
    }
}
