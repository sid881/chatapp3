// const router= require("express")
// const { register } = require("../controllers/userController")
// router.post("/register",function(req, res){register})
// module.exports = router;
const {
    login,
    register,
    getAllUsers,
    setAvatar,
    logOut,
  } = require("../controllers/userController");

const router = require("express").Router();
router.post("/register", register);
module.exports = router;