import express from "express";
import cors from "cors"
import { config } from "dotenv";
import { pool } from "./utils/db.js";
import { userRouter } from "./routes/userRoute.js";
import createUserTable from "./data/create-user-data.js";
config();

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/', userRouter)


//Error handler
app.use((error, req, res, next) => {
    return res.status(error.statusCode || 500).json({ status: "Error", message: error.message });
});



const port = process.env.PORT
const start = async () => {
    //make the table for users
    await createUserTable();
    app.listen(port, () => {
        console.log(`listen from ${port}`);

    })
}
start();