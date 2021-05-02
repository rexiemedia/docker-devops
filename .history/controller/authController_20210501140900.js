const User = require("../models/useModel")

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