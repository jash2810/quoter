const db = require('../models')

const passwordHash = require('password-hash')

/********************************************************************************************************************************************/
// ----------------------------------------------------user registration functions------------------------------------------------------------
/********************************************************************************************************************************************/

// user registration
// POST
exports.registration = async (req, res, next) => {
    try {
        
        var body = req.body

        var data = {
            details: {
                name: body.name,
                bio: body.bio,
                dob: body.dob,
                gender: body.gender,
                email: body.email,
                phone: body.phone,
                locality: {
                    state: body.state,
                    city: body.city
                }
            },
            cred: {
                username: body.username,
                password: body.password
            }
        }

        var user = new db.User(data)

        var hash = passwordHash.generate(user.cred.password)

        user.cred.password = hash

        user.save()
        
        res.json({success: true, msg: "account created successfully!", user: user})

    } catch (error) {
        error.status = 400
        console.log(error);        
    }
}

// check if the username is available or not
// POST
exports.checkUsername = async (req, res, next) => {
    try {

        var {username} = req.body

        var user = await db.User.findOne({
            'cred.username': username
        }, {
            'cred.username': 1
        })
        
        if (username.length <= 2) {
            res.json({success: true, msg: 'username should be more than 2 characters long', status: false})
        } else {
            if (!user) {
                res.json({success: true, msg: 'this username is available', status: true})
            } else {
                res.json({success: true, msg: 'this username is not available', status: false})
            }
        }
        
    } catch (error) {
        error.status = 400
        console.log(error);        
    }
}

/********************************************************************************************************************************************/
// ----------------------------------------------------temporary functions--------------------------------------------------------------------
/********************************************************************************************************************************************/

// to copy paste while you create new functions
exports.usera = async (req, res, next) => {
    try {
        
    } catch (error) {
        error.status = 400
        console.log(error);        
    }
}