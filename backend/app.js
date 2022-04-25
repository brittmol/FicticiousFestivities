const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const csurf = require("csurf");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const { ValidationError } = require("sequelize");

const routes = require("./routes");

// -----------------------------------------------------------------------------------

const { environment } = require("./config");
const isProduction = environment === "production";

const app = express(); // initialize express

app.use(morgan("dev")); // logs info about requests and responses
app.use(cookieParser()); // parses cookies
app.use(express.json()); // parses json bodies of requests with Content-Type of "application/json".

// ------------ Security Middlewares ----------------------------------------------------

if (!isProduction) app.use(cors()); // enable cors only in development

// helmet helps set a variety of headers to better secure your app
// app.use(helmet({
//     contentSecurityPolicy: false
// }));

app.use(
  helmet.crossOriginResourcePolicy({
    policy: "cross-origin",
  })
);

// Set the _csrf token and create req.csrfToken method
app.use(
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true,
    },
  })
);

// ------------------------------------------------------------------------------------

app.use(routes); // Connect all the routes

// ------------ Error Handlers ----------------------------------------------------

// Catch unhandled requests and forward to error handler.
app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
});

// Process sequelize errors
app.use((err, _req, _res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = "Validation error";
  }
  next(err);
});

// Error formatter
app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || "Server Error",
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});

// ------------------------------------------------------------------------------------

module.exports = app;
