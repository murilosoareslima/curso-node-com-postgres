//essa classe será onde ficará a junção de tudo que temos na base de dados, incluindo 
//a conexão com a mesma. A utilização dela, pode ser vista nas classes create e insert.
const sequelize = require('../_database');

const models = {
    evento: require('./evento'),
    participante: require('./participante'),
    sequelize: sequelize
}

module.exports = models;