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
        const user = await User.findById({username})
        if(!user) {
            return res.status(404).json({
                status: 'fail',
                message: 'user not found'
            });
        }
        
        const isCorrect = await bcrypt.compare(password, users.password);

        if(isCorrect) {
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
            message: `User with ID ${req.params.id} is not found`
        })
    }
};
