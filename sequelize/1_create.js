const models = require('./models');

async function create() {
    //esse comenda sync delata todas as tabelas envolvidas no sequelize da models, e
    //as cria novamente. Esse force: true, é pra garantir que tem certeza disso.
    await models.sequelize.sync({force: true});
    await models.sequelize.close();

    console.log('Banco sincronizado');
}

create();