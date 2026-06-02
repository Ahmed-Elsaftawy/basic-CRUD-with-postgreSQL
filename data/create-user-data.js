import { pool } from "../utils/db.js";

const createUserTable = async () => {
    const queryText = `
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at DATE DEFAULT NOW()
)`;

    try {
        pool.query(queryText)
    } catch (error) {
        console.log('Error with creating users table', error.message);

    }
};

export default createUserTable;