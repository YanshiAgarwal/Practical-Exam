const express = require("express");
const connectDb = require("./config/db");

const app = express();

connectDb();

app.use(express.json());
app.use("/courses", require("./routes/courseRoutes"));

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})