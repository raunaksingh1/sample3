const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Business = require("./api/Business");
// const cors = require("cors");

mongoose
  .connect("mongodb://localhost:27017/crudl", { useNewUrlParser: true })
  .then(() => {
    console.log("connected");
  });

// app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", Business);

const port = process.env.PORT || 2000;

app.listen(port, () => {
  console.log(` hello listening on port ${port}`);
});
