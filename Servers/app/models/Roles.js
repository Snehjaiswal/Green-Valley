/*
 * Title:   Login System Advanced 
 * Author:     Sneh Jaiswal
 * Created On: Fri Jun 17 2022 10:56:17 am
 */

"use strict"

const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const Roles = Schema({

    roles: {
        type: Number,
        
    },
  
},
    {
        timestamps: true
    },


)

// collection creation 
const RolesModel = model('Roles', Roles, "Roles");





module.exports = LoginModel;

