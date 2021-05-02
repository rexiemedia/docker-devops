const User = require("../models/useModel")
const bcrypt = require("bcryptjs")

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

exports.logIn = async(req, res, next) => {

    const {username, password} = req.body;

    try {
        const user = await User.findOne({username})

        if(!user) {
            return res.status(404).json({
                status: 'fail',
                message: 'user not found'
            });
        }
        
        const isCorrect = await bcrypt.compare(password, user.password);

        if(isCorrect) {
            req.session.user = user;
            res.status(200).json({
                status: 'success'
            })
        }else {
            res.status(404).json({
                status: 'fail',
                message: 'incorrect username or password'
            })
        }
    }
    catch (e) {
        res.status(400).json({
            status: 'fail',
            message: `User with ID ${username} is not found`
        })
    }
};

exports.signUp = async (req, res, next) => {

    const {firstname, lastname, username, password} = req.body
    const hashpassword = await bcrypt.hash(password, 12)

    try {
        const newUser = await User.create({
            firstname, 
            lastname,
            username,
            password: hashpassword
        });
        req.session.user = newUser.username;
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
