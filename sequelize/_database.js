const Sequelize = require('sequelize');

//dialect é onde define qual banco de dados utilizar (mysql caso fosse mysql)
//e logging define se deve mostrar os comandos que o sequelize utilizará em cada ação, 
//no console, sim ou não.
const sequelize = new Sequelize({
    host: '192.168.99.100',
    database: 'postgres',
    username: 'postgres',
    password: 'postgres',
    dialect: 'postgres',
    port: 5432,
    logging: false
});

module.exports = sequelize;

async function test() {
    try{
    let result = await sequelize.authenticate();
    console.log("Sequelize realizou a conexão com o banco de dados com sucesso");
    } catch (error) {
        console.error("Houve um erro ao conectar com o banco de dados");
        console.error(error);
        process.exit();
    }
}

test();