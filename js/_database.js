const pg = require('pg');

const client = new pg.Client({
    user: 'postgres',
    host: '192.168.99.100',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
})

module.exports = client;