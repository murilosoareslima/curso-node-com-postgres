const Sequelize = require('sequelize');
const sequelize = require('../_database');

const Participante = sequelize.define('participante',{
    nome: {
        type: Sequelize.STRING
    },
});
module.exports = Participante;

//depois de exportar, aqui estamos fazendo a relacao entre as tabelas
//belongsToMany esta dizendo que um participante pode pertencer a muitos eventos
//e o through, define qual o nome da juncao que deve ser criada. Se não for
//definida, o sequelize cria uma por com um nome, automaticamente
const Evento = require('./evento');
Participante.belongsToMany(Evento, {through: 'evento_participante'});