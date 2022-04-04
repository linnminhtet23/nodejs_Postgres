const  Pool = require('pg').Pool;
const pool = new Pool({
    user:'postgres',
    password: "101998",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});
// const poolConfig = process.env.DATABASE_URL ? {
//     connectionString: process.env.DATABASE_URL,
//     ssl: {
//       rejectUnauthorized: false
//     }
//   } : pool;
module.exports = pool;