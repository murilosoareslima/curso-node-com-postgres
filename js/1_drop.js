const db = require('./_database');

try {
    async function dropTables() {
        await db.connect()
        await db.query('DROP TABLE evento CASCADE')
        await db.query('DROP TABLE participante CASCADE')
        await db.query('DROP TABLE evento_participante CASCADE')
        await db.end()
    
        console.log("Tabelas removidas");
    }    
    dropTables()
} catch (error) {
    console.log(error);
}

