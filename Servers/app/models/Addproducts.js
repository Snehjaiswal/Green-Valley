/*
 * Title:   Login System Advanced 
 * Author:     Sneh Jaiswal
 * Created On: Fri Jun 17 2022 10:56:17 am
 */

"use strict"

const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const ProductSchema = Schema({

    Name: {
        type: String,
        required: true,
        trim: true
    },
    Image: {
        data: Buffer,
        contentType: String
    },
    value: {
        type: String,
        required: true
    },
    size: {
        type: String
    },
    colure: {
        type: String,

    },
    description: {
        type: String,

    },
    product_id: {
        type: String,

    },
    isVerifyed: Boolean,

},
    {
        timestamps: true
    },


)

// collection creation 
const productModel = model('PRODUCTS', ProductSchema, "Products");





module.exports = productModel;

