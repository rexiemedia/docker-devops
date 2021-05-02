const express = require("express")
const postController = require('../controller/controllers')
const router = express.Router()

router.route("/")
.get(postController.getAllPosts)
.post(postController.creatPost)

router.route("/:id")
.get(postController.getOnePost)
.patch(postController.updatePost)
.delete(postController.deletePost)

module.exports = router;