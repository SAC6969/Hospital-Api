const express = require("express");
const router = express.Router();
const doctorController = require('../../../controller/doctor_controller');

router.post('/sign-up',doctorController.signUp);
router.post('/sign-in',doctorController.signIn);

module.exports = router;