const Post = require("../models/postModel")

exports.getAllPosts = async(req, res, next) => {

    try {
        const posts = await Post.find();

        res.status(200).json({
            status: 'success',
            results: posts.length,
            data: {
                posts
            }
        })
    }
    catch (e) {
        res.status(400).json({
            status: "request not found"
        })
    }
};

exports.getOnePost = async(req, res, next) => {

    try {
        const post = await Post.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                post
            }
        })
    }
    catch (e) {
        res.status(400).json({
            status: "request not found"
        })
    }
};

exports.creatPost = async(req, res, next) => {

    try {
        const post = await Post.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            results: post.length,
            data: {
                post
            }
        })
    }
    catch (e) {
        res.status(400).json({
            status: "request not found"
        })
    }
};