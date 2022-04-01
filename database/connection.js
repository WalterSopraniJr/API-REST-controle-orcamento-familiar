const Sequelize = require('sequelize')

const database = process.env.DATABASE
const username = process.env.USER_NAME
const password = process.env.PASSWORD
const host = process.env.HOST
const dialect = process.env.DIALECT

console.log(username)
console.log(password)

const connection = new Sequelize(database, username, password, {dialect, host})

module.exports = connection