import {
    getUserService,
    createUserService,
    upadateUserService,
    deleteUserService,
    getAllUsersService
} from "../models/User.js"
import { AppError } from '../utils/errorHandler.js'
import asyncWrapper from "../middlewares/asyncWrapper.js";

const createUser = asyncWrapper(async (req, res, next) => {
    const { name, email } = req.body;
    const newUser = await createUserService(name, email);
    res.status(201).json({ status: 'Success', data: newUser });
});

const getAllUsers = asyncWrapper(async (req, res, next) => {
    const users = await getAllUsersService();
    res.status(200).json({ status: "Success", data: users });
});

const getUser = asyncWrapper(async (req, res, next) => {
    const user = await getUserService(req.params.id);
    if (!user) {
        return next(new AppError('Not Found User', 400, 'Failed'))
    }
    res.status(200).json({ status: "Success", data: user });
});

const updateUser = asyncWrapper(async (req, res, next) => {
    const { name, email } = req.body;
    const response = await upadateUserService(req.params.id, email, name);
    res.status(200).json({ status: "Success", message: "Data Updated Successfully" }); s
});

const deleteUser = asyncWrapper(async (req, res, next) => {
    const response = await deleteUserService(req.params.id);
    res.status(200).json({ status: "Success", message: "User Deleted Successfully" }); s
});


export {
    createUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
}