const express = require('express');
const { registerUser, authUser, authBusinesss, addPost, getpost, likePost, userposts, alluser } = require('../controller/userController');
const router = express.Router()
// const Verify = require('../Middlewears/authMiddlewear')
const { protect } = require('../Middlewears/authMiddlewear')
const upload = require('../utils/multter')


router.get('/', (req, res) => { 
    res.send("hello")
})

router.post("/signup", registerUser);
router.post("/login-business", authBusinesss);
router.post("/login-user", authUser);
router.post('/add-post', upload.single('image'), addPost)
router.get('/get-posts', getpost)
router.post('/like-posts',likePost)
router.get('/get-userposts/:id', userposts)
router.get('/get-users', alluser)


module.exports = router
