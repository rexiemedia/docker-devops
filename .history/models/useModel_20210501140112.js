const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "User must have a title"]
    },
    body: {
        type: String,
        require: [true, "User must have a body"]
    }
})

const User = mongoose.model("User", UserSchema);
module.exports  = User;