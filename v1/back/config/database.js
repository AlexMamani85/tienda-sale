const mysql = require("mysql");

const mysqlConnection = mysql.createPool({
    connectionLimit: 10,
    host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
    user: "bsale_test",
    password: "bsale_test",
    port: 3306,
    database: "bsale_test",
});

mysqlConnection.getConnection((error) => {
    if (error) throw error;
    console.log("Database server running");
});

module.exports = mysqlConnection;
