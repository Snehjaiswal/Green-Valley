/*
 * Title:  Login System Advanced 
 * Author:     Sneh Jaiswal
 * Created On: Fri Jun 17 2022 10:57:06 am
 */


"use strict";

const bcrypt = require("bcrypt");
const MILLISECONDS_PER_MINUTE = 1000 * 60;

class OTP {
	// create a function it's help GenerateOTP
	async generateOTP(email) {
		try {
			const otp = Math.floor(100000 + Math.random() * 900000);
			const ttl = 10 * MILLISECONDS_PER_MINUTE;
			const expires = Date.now() + ttl;

			const data = `${email}${otp}${expires}`;
			const hash = await bcrypt.hash(data, 10);
			const fullHash = `${hash}.seperator.${expires}`;
		
			return {
				otp: otp,
				expires: expires,
			};
		} catch (error) {
			console.error(error);
		}
	}

	// async validateOTP(email, otp, hash) {
	// 	try {
	// 		const [hashValue, expires] = hash.split(".seperator.");
	// 		const now = Date.now();

	// 		if (now > +expires) {
	// 			return {
	// 				verification: false,
	// 				msg: `OTP Expired!`,
	// 			};
	// 		}
			
	// 		const data = `${email}${otp}${expires}`;
	// 		const isValid = await bcrypt.compare(data, hashValue);

	// 		if (!isValid) {
	// 			return {
	// 				verification: false,
	// 				msg: `OTP is Invalid!`,
	// 			};
	// 		}

	// 		return {
	// 			verification: true,
	// 			msg: `OTP is Valid.`,
	// 		};
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// }

}

module.exports = new OTP();
