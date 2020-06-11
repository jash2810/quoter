const db = require('../models')

exports.test = async (req, res, next) => {
    try {
        res.json({user: 'jash'})
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