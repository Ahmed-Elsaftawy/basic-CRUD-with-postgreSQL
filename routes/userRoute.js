import express from "express";
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user-controller.js";
import validateUser from "../middlewares/input-validator.js";

const userRouter = express.Router();

userRouter.route('/user')
    .get(getAllUsers)
    .post(validateUser, createUser);
userRouter.route('/user/:id')
    .put(validateUser, updateUser)
    .get(getUser)
    .delete(deleteUser);


export { userRouter }