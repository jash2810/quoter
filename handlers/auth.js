const db = require('../models')

const passwordHash = require('password-hash')

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

// to copy paste while you create new functions
exports.usera = async (req, res, next) => {
    try {
        
    } catch (error) {
        error.status = 400
        console.log(error);        
    }
}