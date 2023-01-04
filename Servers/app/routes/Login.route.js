/*
 * Title:   Login System Advanced 
 * Author:     Sneh Jaiswal
 * Created On: Fri Jun 17 2022 10:56:30 am
 */

"use strict"

const router = require("express").Router()
const { signup , VerifyedOTP, signin ,changePassword}= require('../controllers/Login.controller')
const {chaacngePasswordmiddleware } = require('../middlewares/auth')

// Route level middleware -to
router.use('/changePassword',chaacngePasswordmiddleware)

// Public Routes
router.post('/signup',signup)
router.post('/signin',signin)
router.post('/VerifyedOTP', VerifyedOTP)


// Protected Routes
router.post('/changePassword', changePassword)

module.exports = router;