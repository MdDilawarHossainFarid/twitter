const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
    content:{ type:String},
    likes:{ type:Number},
    noOfReteets:{
        type:Number
    },
    comment:{
        type:String
    }


});

const Tweet = mongoose.model('Tweet',tweetSchema)

module.exports = {Tweet};