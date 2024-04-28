const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));
const loginData = require("../PROJECTS/routes/routes");
const routeRouter = require("../PROJECTS/routes/app");
app.use(loginData);
app.use(routeRouter);

app.listen(5000, () => {
  console.log("Server Started in 5000");
});
