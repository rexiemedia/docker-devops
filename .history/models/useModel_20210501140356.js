const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        require: [true, "User must have a first name"]
    },
    lastname: {
        type: String,
        require: [true, "User must have a last name"]
    },
    username: {
        type: String,
        require: [true, "User must have a username"],
        unique: true
    },
    password: {
        type: String,
        require: [true, "User must have a password"]
    }
})

const User = mongoose.model("User", UserSchema);
module.exports  = User;