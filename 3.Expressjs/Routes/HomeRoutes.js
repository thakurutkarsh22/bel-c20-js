const express = require('express');
const { HomeResponse, AboutResponse } = require('../Controllers/HomeController');
const router = express.Router();

router.get("/", HomeResponse)
router.get("/home", HomeResponse)
router.get("/abouts", AboutResponse)

module.exports = router;