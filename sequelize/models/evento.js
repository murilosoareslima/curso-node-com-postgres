const Sequelize = require('sequelize');
const sequelize = require('../_database');

const Evento = sequelize.define('evento',{
    nome: {
        type: Sequelize.STRING
    },
});
module.exports = Evento;

//depois de exportar, aqui estamos fazendo a relacao entre as tabelas
//belongsToMany esta dizendo que um evento pode ter muitos participante
//e o through, define qual o nome da juncao que deve ser criada. Se não for
//definida, o sequelize cria uma por com um nome, automaticamente
const Participante = require('./participante');
Evento.belongsToMany(Participante, {through: 'evento_participante'});