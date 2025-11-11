const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const todoRoutes = require("./routes/todoRoutes");

dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Api is running");
});

app.use("/api/todos", todoRoutes);

app.listen(process.env.PORT, () => {
    console.log("Server is running in localhost 5000");
});
