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
var upload = multer({ dest: 'uploadimage' })


const express = require("express");
const router = express.Router();


// product  CLASS
class Product {
  



    // upload image using multer
    async upload2(req, res) {
        console.log('call api');
        res.json({ message: 'uploaded' })
    }

    async multi_upload(req, res) {
        multi_upload1(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                // A Multer error occurred when uploading.
                res.status(500).send({ error: { message: `Multer uploading error: ${err.message}` } }).end();
                return;
            } else if (err) {
                // An unknown error occurred when uploading.
                if (err.name == 'ExtensionError') {
                    res.status(413).send({ error: { message: err.message } }).end();
                } else {
                    res.status(500).send({ error: { message: `unknown uploading error: ${err.message}` } }).end();
                }
                return;
            }

            // Everything went fine.
            // show file `req.files`
            // show body `req.body`
            res.status(200).end('Your files uploaded.');
        })
    }



}


module.exports = new Product();
