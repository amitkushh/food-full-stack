import express from "express";
import { config } from "./conf/config.js";
import connectDB from "./db/mongoose.js";

const app = express();
const port = config.PORT || 3000;

connectDB();

app.get("/", (req, res) => {
  res.send("helllo");
});

app.listen(port, () => {
  console.log(`PORT is running on ${port}`);
});
