const express = require("express");
const morgan = require("morgan");
const textRouter = require("./routes/textRouter");
const errorController = require("./controllers/errorController");
const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(`${process.env.URL_PREFIX}/texts`, textRouter);
app.use(errorController);
app.use("*", (req, res) => {
  res.status(404).send("route does not exist");
});

module.exports = app;
