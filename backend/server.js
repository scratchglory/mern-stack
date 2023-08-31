const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); // help connect to mongoDB

require("dotenv").config();

// create express server
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established succesfully");
});

// starts the server and lisetning
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
