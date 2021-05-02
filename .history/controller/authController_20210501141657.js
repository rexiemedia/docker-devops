const User = require("../models/useModel")

exports.getUsers = async (req, res, next) => {

    try {
        const users = await User.find();

        res.status(200).json({
            status: "success",
            results: users.length,
            data: {
                users
            }
        })
    }
    catch (e) {
        res.status(400).json({
            status: "Users not found"
        })
    }
}

exports.signIn = async(req, res, next) => {

    try {
        const user = await User.findById(req.params.id);

        res.status(200).json({
            status: "success",
            data: {
                user
            }
        })
    }
    catch (e) {
        res.status(400).json({
            status: `User with ID ${req.params.id} is not found`
        })
    }
};

exports.signUp = async (req, res, next) => {

    try {
        const newUser = await User.create(req.body)
        res.status(201).json({
            status: 'success',
            data: {
                newUser
            }
        })
    }
    catch(e) {

    }
}