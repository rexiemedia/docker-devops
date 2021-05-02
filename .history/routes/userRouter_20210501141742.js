const express = require("express")

const authController = require("../controller/authController")

const router = express.Router;

router.route("/")
.get(authController.getUsers)
.post(postController.signUp)

router.route("/:id")
.get(postController.signIn)
// .patch(postController.updatePost)
// .delete(postController.deletePost)

module.exports = router;