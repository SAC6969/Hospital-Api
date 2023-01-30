const express = require("express");
const router = express.Router();
const reportsController = require('../../../controller/reports_controller');
const passport = require('passport')


router.get("/:status", passport.authenticate("jwt", {session: false}),reportsController.allStatus);


module.exports = router;