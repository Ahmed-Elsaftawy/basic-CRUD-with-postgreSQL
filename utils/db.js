import { Pool } from "pg";
import { config } from "dotenv";
config();
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    user: process.env.DATABASE_URL ? undefined : process.env.DB_USER,
    port: process.env.DATABASE_URL ? undefined : process.env.DB_PORT,
    host: process.env.DATABASE_URL ? undefined : process.env.DB_HOST,
    password: process.env.DATABASE_URL ? undefined : process.env.DB_PASSWORD,
    database: process.env.DATABASE_URL ? undefined : process.env.DB_DATABASE,
    ssl: {
        rejectUnauthorized: false
    }
});
pool.on('connect', () => {
    console.log('Database is connected');

})

export { pool };