const  mongoose  = require("mongoose");
const bcrypt =require("bcrypt");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required:true,
        unique:true
    },
    password: {
        type: String
    },
    bio: {
        type: String
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId
        }
    ],
    name:{        
        type: String
    
    }
});

userSchema.pre ('save',function(next)
{
    const user = this;
    const salt = bcrypt.genSaltSync(9);
    const encryptedPassword = bcrypt.hashSync(user.password,salt)
    user.password = encryptedPassword;
    next();
})

const User =  mongoose.model('User',userSchema);

module.exports = {User}