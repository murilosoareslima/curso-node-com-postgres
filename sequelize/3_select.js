const models = require('./models');
try {
    async function select() {
        console.log("\n");
    
        const eventos = await models.evento.findAll();
        eventos.forEach((evento) => {
            console.log("Evento: ", evento.nome)
        });
        console.log("\n");
    
        const participantes = await models.participante.findAll();
        participantes.forEach((participante) => {
            console.log("Participante: ", participante.nome);
        });
        console.log("\n");
    
        //o parametro include diz pro sequelize, que desejamos incluir, 
        //uma relacao que existe na tabela de evento, que a tabela participante.
        const eventosComParticipantes = await models.evento.findAll({
            include: [
                {
                    model: models.participante
                }
            ]
        });
        eventosComParticipantes.forEach((evento) => {
            console.log("Evento: ", evento.nome);
            evento.participantes.forEach((participante) => {
                console.log("---------------> Participante: ", participante.nome);
            });
        });
        console.log("\n");
    
        await models.sequelize.close();
    }
    
    select();
} catch (error) {
    console.error(error);
}
