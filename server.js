const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const infoRouter = require("./src/router");
const { default: mongoose } = require("mongoose");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/info", infoRouter);

mongoose.connect(process.env.MONGODB_URL).then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server is running at", process.env.PORT);
  });
});
