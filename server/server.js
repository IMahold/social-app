const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json()); // used to process the body part of the incoming message
app.use("/users", require("./api/users"));
app.use("/posts", require("./api/posts"));

const connectToDb = require("./config/db");

connectToDb();

const path =  process.platform === 'win32' ? "server/uploads" : './server/uploads'

app.use(express.static(path));

const port = process.env.PORT || 6000;

app.listen(port, () => console.log("Server is up and running at port", port));
