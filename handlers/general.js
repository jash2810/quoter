const db = require('../models')
const localities = require('../staticdata/locality')

const passwordHash = require('password-hash')

/********************************************************************************************************************************************/
// ----------------------------------------------------Localities-----------------------------------------------------------------------------
/********************************************************************************************************************************************/

// get all the localities function
// GET
exports.getAllLocalities = async (req, res, next) => {
    try {
        
        var data = localities
        res.json({success: true, localities: data})

    } catch (error) {
        error.status = 400
        console.log(error);        
    }
}

// get states
// GET
exports.getStates = async (req, res, next) => {
    try {
        
        var data = []

        localities.forEach(l => {
            data.push(l.state)
        });

        var uniqueArray = data.filter(function(item, pos, self) {
            return self.indexOf(item) == pos;
        })

        res.json({success: true, states: uniqueArray})
        

    } catch (error) {
        error.status = 400
        console.log(error);        
    }
} 

// get specific cities from the state given
// GET
exports.getCityOfSpecificState = async (req, res, next) => {
    try {
        
        var data = localities
        var {state} = req.params
        var cities = []

        data.forEach(d => {
            if (d.state === state) {
                cities.push(d.name)
            }
        });

        res.json({success: true, cities: cities})

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