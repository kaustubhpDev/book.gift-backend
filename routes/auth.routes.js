const { verifySignup } = require("../middlewares");
const controller = require("../controllers/auth.controller");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [verifySignup.checkDuplicateEmail],
    controller.signup
  );
  app.post("/api/auth/login", controller.login);
};
