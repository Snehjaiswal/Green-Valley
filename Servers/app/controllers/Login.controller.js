/*
 * Title:   Login System Advanced 
 * Author:     Sneh Jaiswal
 * Created On: Fri Jun 17 2022 10:50:45 am
 */


"use strict";

const LoginModel = require("../models/Login.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const uuid = require("uuid").v4;

const sendMail = require("../utils/sendEmail.util");
const OtpUtil = require("../utils/otp.util")
const multer = require('multer')
// var upload = multer({ dest: 'uploadimage' })


const express = require("express");
const router = express.Router();
// const uploadController = require("../controllers/upload");
// LOGIN CLASS
class Login {
    async signup(req, res) {

        try {
            const { Name, email, password, cpassword } = req.body;
            console.log(req.body);
            // CHECK ALL FIELD IN FILL
            if (!Name || !email || !password || !cpassword)
                return res.send({ msg: "Please fill in all fields." });


            // EMAIL VALIDATER
            if (!validateEmail(email))
                return res.send({ msg: "Invalid emails." });


            // CHECK EMAIL IS ALREADY EXISTS ARE NOT
            const user = await LoginModel.findOne({ email });

            // TTL INDEX USE
            if (user)
                return res.send({ msg: "This email already exists." });

            // CHECK PASSWORD LENGTH
            if (password.length < 6)
                return res

                    .send({ msg: "Password must be at least 6 characters." });

            //Hash password
            const passwordHash = await bcrypt.hash(password, 10);
            const cpasswordHash = await bcrypt.hash(cpassword, 10);

            // It's help Otp generater
            const { otp, expires } = await OtpUtil.generateOTP(email);
            // console.log({ otp, expires })

            const url = ` OTP: ${otp} `; //url for email

            // it's help send mail
            // sendMail.sendVerificationMail(email, url, "Verify your email address");

            // it's help save data in db
            const newUser = new LoginModel({
                Name,
                email,
                password: passwordHash,
                cpassword: cpasswordHash,
                isVerifyed: false,
                otp,
                expires,
            });

            //STORE YOUR LOGIN DATA IN DB 
            await newUser.save();
            console.log({ newUser });

            const saved_user = await LoginModel.findOne({ email: email })
            // Genwrate JWT Token
            const token = jwt.sign({ userID: saved_user._id },
                'checkthisissecretkey', { expiresIn: '1d' }
            )

            res.send({ msg: "Register Success! Please activate your email to start." });

        } catch (err) {
            return res.send({ msg: err });
        }
    }

    async addproduct(req, res) {
        try {
            const { Name, password, product_id } = req.body
            console.log(req.body);
            // CHECK ALL FIELD IN FILL
            if (!Name  || !password || !product_id)
                return res.send({ msg: "Please fill in all fields." });
            const newUser = new LoginModel({
                Name,
                
                password,
                isVerifyed: false,

            })
            await newUser.save();
            console.log({ newUser });
            res.send({msg:"done"})
        }
        catch (err) {
            return res.send({ msg: err });

        }
    }

    //otp verifed
    async VerifyedOTP(req, res) {
        const { email, otp } = req.body;


        const isValid = await LoginModel.findOne({ email: email });
        console.log({ isValid });


        // CHECK OTP  EXPIRE IS VALID OR NOT
        const now = Date.now();
        if (now > + isValid.expires) {
            res.send({
                verification: false,
                msg: "OTP Expired!",
            })
        }

        console.log("otp", otp);

        if (otp == isValid.otp) {

            // Genwrate JWT Token
            const token = jwt.sign({ userID: isValid._id },
                'checkthisissecretkey', { expiresIn: '1d' })


            // find and update is varified (true)
            const verifyAccount = LoginModel.findOneAndUpdate({ email: email }, { $set: { isVerifyed: true } })
                .then(() => {
                    console.log("successfully verifed");
                }).catch((err) => {
                    console.log(err);
                })

            res.send({ msg: "Otp is Corect", token: token, data: isValid });

        } else {
            res.send({ msg: "Otp is incorect" });
        }

    }
    // upload image using multer
    // async upload2(req, res) {
    //     console.log('call api');
    //     res.json({ message: 'uploaded' })
    // }

    // async multi_upload(req, res) {
    //     multi_upload1(req, res, function (err) {
    //         if (err instanceof multer.MulterError) {
    //             // A Multer error occurred when uploading.
    //             res.status(500).send({ error: { message: `Multer uploading error: ${err.message}` } }).end();
    //             return;
    //         } else if (err) {
    //             // An unknown error occurred when uploading.
    //             if (err.name == 'ExtensionError') {
    //                 res.status(413).send({ error: { message: err.message } }).end();
    //             } else {
    //                 res.status(500).send({ error: { message: `unknown uploading error: ${err.message}` } }).end();
    //             }
    //             return;
    //         }

    //         // Everything went fine.
    //         // show file `req.files`
    //         // show body `req.body`
    //         res.status(200).end('Your files uploaded.');
    //     })
    // }
    // student signin information

    async signin(req, res) {
        try {
            const { email, password } = req.body;

            // check if user exist
            const user = await LoginModel.findOne({
                $and: [
                    { email: email },
                    { isVerifyed: true }
                ]
            });

            //  CHECK EMAIL IS VALID OR NOT
            if (!user)
                return res.send({ msg: "This email in not Valid." });

            if (user.isVerifyed == false)
                return res.send({ msg: "This email in not Verified." });

            const isMatch = await bcrypt.compare(password, user.password);
            if ((user.email === email) && !isMatch)

                return res.send({ msg: "Email or password is not valid." });


            // Genwrate JWT Token
            const token = jwt.sign({ userID: user._id, email: email },
                'checkthisissecretkey', { expiresIn: '1d' })


            res.send({ msg: "Login success!", "token": token, "status": "success", data: user });


            console.log(`Login Success!`);


        } catch (err) {
            return res.send({ msg: err.message });
        }
    }

    // Change password
    async changePassword(req, res) {

        const { password, cpassword } = req.body;
        if (password && cpassword) {
            if (password !== cpassword) {
                res.send({ "status": "faild", msg: "New password and confirm password dosn't match" })
            } else {
                //Hash password
                const passwordHash = await bcrypt.hash(password, 10);
                const cpasswordHash = await bcrypt.hash(cpassword, 10);

            }
        } else {
            res.senD({ "status": "failed", msg: "All feild are reqired" })
        }
    }



}
// // email validation

function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

module.exports = new Login();
