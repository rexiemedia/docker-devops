const express = require("express")

const authController = require("../controller/authController")

const router = express.Router();

router.route("/")
.get(authController.getUsers)

router.post("/signup", authController.signUp)
router.post("/login", authController.logIn)

// router.route("/signin/:id")
// .post(authController.signIn)
// .patch(authController.updateUser)
// .delete(authController.deleteUser)

module.exports = router;