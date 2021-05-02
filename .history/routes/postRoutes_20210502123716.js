const express = require("express")
const postController = require('../controller/controllers')
const protect = require("../middleware/authMiddleware")
const router = express.Router()

router.route("/")
.get(postController.getAllPosts)
.post(protect, postController.creatPost)

router.route("/:id")
.get(postController.getOnePost)
.patch(postController.updatePost)
.delete(protect, postController.deletePost)

module.exports = router;