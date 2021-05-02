const express = require("express")

const authController = require("../controller/authController")

const router = express.Router();

router.route("/")
.get(authController.getUsers)

router.post("/signup", authController.signUp)

router.route("/signin/:id")
.get(authController.signIn)
.patch(authController.updateUser)
.delete(authController.deleteUser)

module.exports = router;