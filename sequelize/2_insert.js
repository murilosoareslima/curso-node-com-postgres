const models = require('./models');

async function insert() {
    const eventoNode = await models.evento.create({nome: 'Encontro de Node.js'});
    const eventoPostgres = await models.evento.create({nome: 'Encontro de Postgresql'});

    const carlos = await models.participante.create({nome: 'Carlos'});
    const augusto = await models.participante.create({nome: 'Augusto'});
    const janaina = await models.participante.create({nome: 'Janaína'});
    const rafael = await models.participante.create({nome: 'Rafael'});

    //esse set, é feito automaticamente pelo sequelize, ao definirmos o belongsToMany em 
    //evento.js e participante.js
    await eventoNode.setParticipantes([carlos, augusto, janaina]);
    await eventoPostgres.setParticipantes([janaina, rafael]);

    await models.sequelize.close();

    console.log("Dados Inseridos");    
}

insert();