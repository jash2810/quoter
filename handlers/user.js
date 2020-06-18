const db = require('../models')

// to copy paste while you create new functions
exports.myprofile = async (req, res, next) => {
    try {
        
        var { userId }= req.body

        var user = await db.User.findById(userId)

        if (user) {
            console.log(user);
            
            res.json({success: true, msg: 'user found', profile: user})
        } else {
            res.json({success: false, msg: 'no such user found'})
        }

    } catch (error) {
        error.status = 400
        console.log(error);        
    }
}

// to copy paste while you create new functions
exports.user = async (req, res, next) => {
    try {
        
    } catch (error) {
        error.status = 400
        console.log(error);        
    }
}