/*
 * Title:   Login System Advanced 
 * Author:     Sneh Jaiswal
 * Created On: Fri Jun 17 2022 10:56:30 am
 */

"use strict"

const router = require("express").Router()
const { signup , VerifyedOTP, signin ,changePassword,upload2, upload ,uploadController}= require('../controllers/Login.controller')
const {chaacngePasswordmiddleware } = require('../middlewares/auth')

// Route level middleware -to
router.use('/changePassword',chaacngePasswordmiddleware)

// Public Routes
router.post('/signup',signup)
router.post('/signin',signin)
router.post('/VerifyedOTP', VerifyedOTP)
// router.post('/upload1',multi_upload)
// router.post('/upload',single('image'), upload2)  
// router.post("/multiple-upload", uploadController.multipleUpload);

// Protected Routes
router.post('/changePassword', changePassword)

module.exports = router;