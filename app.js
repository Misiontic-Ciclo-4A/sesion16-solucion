var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const expressStatusmonitor = require("express-status-monitor");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// config
const config = {
  healthChecks: [
    {
      protocol: "http",
      host: "localhost",
      path: "/",
      port: "3000",
    },
    {
      protocol: "http",
      host: "localhost",
      path: "/users",
      port: "3000",
    },
  ],
};

app.use(expressStatusmonitor());
app.use("/", indexRouter);
app.use("/users", usersRouter);

app.listen(3000, () => {
  console.log("Conectado al puerto 3000");
});
