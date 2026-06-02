import { pool } from "../utils/db.js";
import asyncWrapper from '../middlewares/asyncWrapper.js'


const getAllUsersService = async () => {
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
};

const getUserService = async (userId) => {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);
    return result.rows[0];
};

const createUserService = async (name, email) => {
    const result = await pool.query('INSERT INTO users (name,email) VALUES ($1,$2) RETURNING *', [name, email]);
    return result.rows[0];
}

const upadateUserService = async (id, email, name) => {
    const result = await pool.query(
        'UPDATE users SET name = $3, email = $2 WHERE id = $1 RETURNING *',
        [id, email, name]
    );
    return result.rows[0];
}

const deleteUserService = async (id) => {
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
}


export {
    getUserService,
    createUserService,
    upadateUserService,
    deleteUserService,
    getAllUsersService
}