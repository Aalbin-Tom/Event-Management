const express = require('express');
const { registerUser, authUser, authBusinesss } = require('../controller/userController');
const router = express.Router()



router.get('/', (req, res) => {
    res.send("hello")
})

router.post("/signup", registerUser);
router.post("/login-business", authBusinesss);
router.post("/login-user", authUser);



module.exports = router
