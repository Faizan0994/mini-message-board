const express = require("express");
const router = express.Router();
const controller = require("../controllers/new-message-controller");

router.get("/", controller.form);
router.post("/", controller.handleData);

module.exports = router;
