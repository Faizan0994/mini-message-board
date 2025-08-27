const express = require("express");
const router = express.Router();
const controller = require("../controllers/index-controller");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Probably no one's gonna read this",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", (req, res, next) => {
  res.locals.messages = messages;
  controller(req, res, next);
});

module.exports = { router, messages };
