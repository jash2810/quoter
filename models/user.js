const mongoose = require('mongoose')
 
const UserSchema = new mongoose.Schema({
   details: {
       name: {type: String, required: true},
       bio: {type: String},
       dob: {type: Date},
       //age
       gender: {type: String},
       email: {type: String},
       phone: {type: Number},
       locality: {
           state: {type: String},
           city: {type: String}
       }
   },
   cred: {
       username: {type: String, required: true, unique: true},
       password: {type: String},
       oldPasswords: {type: Array}
   },
   collections: [{
       name: {type: String},
       quotes: [{
           type: mongoose.Schema.Types.ObjectId,
           ref: 'Quote'
       }],
       createdDate: {type: Date, default: Date.now}
   }],
   account: {
       category: {type: String, default: 'personal'}, //personal / blog
       privacy: {type: String, default: 'private'}, // public / private
       endorsements: {
           total: {type: Number, default: 0},
           by: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
           }]
       },
       influencer: {type: Boolean, default: false}
   }
//    preferences and all to come...
}, {
    timestamps: true
})
 
module.exports = mongoose.model('User', UserSchema)