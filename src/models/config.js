databaseMysql = {
    username: 'root',
    password: process.env.POSTGRESS_PASSWORD,
    database: 'postgres',
}
databasePostgress = {
    username: 'postgres',
    password: process.env.POSTGRESS_PASSWORD,
    database: 'test',
}

module.exports = { databaseMysql, databasePostgress }; 
