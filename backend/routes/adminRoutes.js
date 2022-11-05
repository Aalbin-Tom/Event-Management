const express = require('express');
const { adminlogin, allusers, blockUser, UnblockUser, allbusiness, Unblockbusiness, blockBusiness } = require('../controller/adminController');
const router = express.Router()



router.get('/admin', (req, res) => {
    res.send("hello")
})


router.post("/login", adminlogin)
router.get("/get-users", allusers)
router.post("/blockUser", blockUser)
router.post("/unblockUser", UnblockUser)
router.get("/get-business", allbusiness)
router.post("/unblockBusiness", Unblockbusiness)
router.post("/blockBusiness", blockBusiness)


module.exports = router