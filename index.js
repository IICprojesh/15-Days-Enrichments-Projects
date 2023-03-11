require('dotenv').config()
// initialize database connection
require('./config/database')

const config = require('./config/config').getConfig(),
    PORT = config.PORT

console.log('Bootstraping the application')
console.log(`MODE: ${config.MODE}`)
console.log(`PORT: ${config.PORT}`)

const {server} = require("./config/server");


server.listen(PORT).on('error', err => {
    console.log('Application failed to start');
    console.log(err.message);
    process.exit(0);
}).on('listening', () => {
    console.log(`Application started on ${PORT}`);
})

module.exports = {server}