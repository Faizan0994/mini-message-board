const express = require("express");
const indexRouter = require("./routes/index");
const newMessageRouter = require("./routes/new");
const path = require("node:path");

const app = express();
const PORT = 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter.router);
app.use("/new", newMessageRouter);

app.use((error, req, res, next) => {
  console.log(error);
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
