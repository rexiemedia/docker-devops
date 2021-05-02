const Post = require("../models/postModel")

exports.getAllPosts = async(req, res, next) => {

    try {
        const posts = await Post.find();

        res.status(200).json({
            status: "success",
            results: posts.length,
            data: {
                posts
            }
        })
    }
    catch (e) {
        res.status(400).json({
            status: "request not found for getall"
        })
    }
};

exports.getOnePost = async(req, res, next) => {

    try {
        const post = await Post.findById(req.params.id);

        res.status(200).json({
            status: "success",
            data: {
                post
            }
        })
    }
    catch (e) {
        res.status(400).json({
            status: "request not found for get 1"
        })
    }
};

exports.creatPost = async(req, res, next) => {

    try {
        const post = await Post.create(req.body);

        res.status(200).json({
            status: "success",
            data: {
                post
            }
        })
    }
    catch (e) {
        res.status(400).json({
            status: "request not found for create"
        })
    }
};

exports.updatePost = async(req, res, next) => {

    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: "success",
            data: {
                post
            }
        })
    }
    catch (e) {
        res.status(400).json({
            status: "request not found for update"
        })
    }
};

exports.deletePost = async(req, res, next) => {

    try {
        const post = await Post.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: "success"
        })
    }
    catch (e) {
        res.status(400).json({
            status: "request not found to delete"
        })
    }
};