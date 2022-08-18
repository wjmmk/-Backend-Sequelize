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

// Esta es otra forma de hacerlo
/* module.exports = {

    database: {
        username: "root",
        password: "9783238",
        database: "sequelize_test",
        host: "localhost"
    }

} */