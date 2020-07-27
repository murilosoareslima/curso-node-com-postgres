const Sequelize = require('sequelize');
const models = require('./models');
//Op de operators (operadores and, or , between, like, notlike etc)
const Op = Sequelize.Op;

async function select() {
    const eventosComParticipantes = await models.evento.findAll({
        where: {
            nome: {
                [Op.like]: '%Node.js%'
            }
        },
        include: [
            {
                model: models.participante,
                where: {
                    nome: {
                        [Op.notLike]: '%o%'
                    },
                }
            }
        ]
    })
    eventosComParticipantes.forEach((evento) => {
        console.log("Evento: ", evento.nome);
        evento.participantes.forEach((participante) => {
            console.log("-------------> Participante: ", participante.nome);
        })
    });
    console.log("\n");

    await models.sequelize.close();
}

select();