const User = require('../models/loginModel')
const Post = require('../models/postModel')
const { cloudinary } = require('../utils/cloudinary');
const { upload } = require('../utils/multter')
const asyncHandler = require("express-async-handler")
const generateToken = require('../jwtjson')
const ObjectId = require('mongodb').ObjectId

//sign up to 
const registerUser = asyncHandler(async (req, res) => {

    const { name, email, password, phone, type } = req.body;
    console.log(req.body);
    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error("User allready Exists ")

    } else {
        const user = await User.create({
            name, email, password, type, phone
        });
        if (user) {

            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: "false",
                type: user.type,
                phone: user.phone,
            })
        } else {
            res.status(400)
            throw new Error("error")
        }
    }
    console.log(Error);
})


//login as user
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    console.log(req.body);
    const user = await User.findOne({ email })

    if (user.status) {
        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: "false",
                type: user.type,
                image: user.pic,
                token: generateToken(user._id)
            })
        } else {
            res.status(400)
            throw new Error("Invalid Email or Password")
        }
    } else {
        throw new Error(' ACCOUNT  IS  BLOCKED ')
    }

})


//login as business account
const authBusinesss = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    console.log(req.body);
    const user = await User.findOne({ email })

    if (user.status) {
        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: "false",
                type: user.type,
                image: user.pic,
                token: generateToken(user._id)
            })
        } else {
            res.status(400)
            throw new Error("Invalid Email or Password")
        }
    } else {
        throw new Error(' ACCOUNT  IS  BLOCKED ')
    }
})


//add new post 
const addPost = asyncHandler(async (req, res) => {
    // console.log(req.file);

    const userid = req.body.userid
    console.log(req.body.userid, "jsdhbshdbfh");

    const imageUploadResponse = await cloudinary.uploader.upload(req.file.path, { folder: 'Post' });


    const p = new Post(req.body)

    p.image = imageUploadResponse.url;
    p.publicId = imageUploadResponse.public_id;
    p.userId = userid
    console.log(p, "hbhbhbh");

    const post = await p.save()

    res.status(200).json({
        p
    })


})


const getpost = asyncHandler(async (req, res) => {

    const post = await Post.find().populate('userId').sort({ "createdAt": -1 })
    if (post) {
        res.json({
            post
        })
        // console.log(post);
    } else {
        throw new Error('No data in db ')

    }

})

const likePost = asyncHandler(async (req, res) => {
    const { _id, userId } = req.body
    console.log(req.body);

    try {
        const post = await Post.findById(_id)
        if (!post.likes.includes(userId)) {
            await post.updateOne({ $push: { likes: userId } })
            res.status(200).json({ post })

        } else {
            await post.updateOne({ $pull: { likes: userId } })
            res.status(200).json({ post })
        }

    } catch (error) {
        // console.log(error);

        res.status(500).json(error)

    }


})

const userposts = asyncHandler(async (req, res) => {
    const  id  = req.params.id
    console.log(id);
    const post = await Post.find({ userId: ObjectId(id)})
    console.log(post);
    if (post) {
        res.json({
            post
        })
    } else {
        throw new Error('No data in db ')
    }

})

const alluser = asyncHandler(async( req,res)=>{
    const users = await User.find()
    // console.log(users);
    if (users) {
        res.json({
            users
        })
    } else {
        throw new Error('No data in db ')
    }
})


module.exports = { registerUser, authUser, authBusinesss, addPost, getpost, likePost, userposts, alluser }
