const express = require("express");
const ridesRouter = require("./routes/rides");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Lift-Please API is healthy"
  });
});

app.use("/api/rides", ridesRouter);

module.exports = app;