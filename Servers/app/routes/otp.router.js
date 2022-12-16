/*
 * Title:   Login System Advanced 
 * Author:     Sneh Jaiswal
 * Created On: Fri Jun 17 2022 10:56:44 am
 */


"use strict";

const router = require("express").Router();
const otpUtil = require("../utils/otp.util");

router.post("/generate-otp", generateOTP);
router.post("/verify-otp", validateOTP);

async function generateOTP(req, res) {
	const { email } = req.body;
	const response = await otpUtil.generateOTP(email);
	res.send(response);
}

async function validateOTP(req, res) {
	const { email, otp, hash } = req.body;
	const response = await otpUtil.validateOTP(email, otp, hash);
	res.send(response);
}

module.exports = router;