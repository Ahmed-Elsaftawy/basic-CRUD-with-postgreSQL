import { Pool } from "pg";
import { config } from "dotenv";
config();
const pool = new Pool({
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

pool.on('connect', () => {
    console.log('Database is connected');

})

export { pool };