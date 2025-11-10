const express = require("express");
const app = express();
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const todoRoutes = require("./routes/todoRoutes");

dotenv.config();
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Api is running");
});

app.use("/api/todos", todoRoutes);

app.listen(process.env.PORT, () => {
    console.log("Server is running in localhost 5000");
});
