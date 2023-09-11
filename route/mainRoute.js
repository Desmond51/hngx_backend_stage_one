const express = require("express");
const { getInfo } = require("../controller/main");
const router = express.Router();

router.get('/', getInfo)

module.exports = router;
