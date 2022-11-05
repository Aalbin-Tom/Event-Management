const asyncHandler = require("express-async-handler")
const User = require('../models/loginModel')


const adminlogin = asyncHandler(async (req, res) => {
    console.log('hiii');
    const cred = {
        email: "admin@gmail.com",
        password: "admin"
    }
    const { email, password } = req.body
    console.log(req.body);

    if (cred.email === email && cred.password === password) {
        res.json({
            name: "Admin",
            email: email,
            isAdmin: "true",
           
        })
    } else {
        res.status(400)
        throw new Error("Invalid Email Or Password")
    }

})


const allusers = asyncHandler(async (req, res) => {
    const users = await User.find({type:"user"})
    // console.log(users);
    if (users) {
        res.json({
            users
        })
    } else {
        throw new Error('No data in db ')
    }
})

const allbusiness = asyncHandler(async (req, res) => {
    const users = await User.find({type:"business"})
 
    if (users) {
        res.json({
            users
        })
    } else {
        throw new Error('No data in db ')
    }
})


const blockUser = asyncHandler(async (req, res) => {

    const { _id } = req.body;
    console.log(req.body);

    let user = await User.findOne({ _id: _id });

    if (user) {
        let success = await User.updateOne( 
            { _id: _id },
            {
                $set: { status: false },
            }
        );
        userdata = await User.findOne({ _id: _id });
        console.log(userdata);
        res.json({ user });
    } else {
        res.status(400);
        throw new Error("No users available");
    }
})

const UnblockUser = asyncHandler(async (req, res) => {
console.log("unblockUser");
    const { _id } = req.body;
    console.log(req.body);

    let user = await User.findOne({ _id: _id });

    if (user) {
        let success = await User.updateOne(
            { _id: _id },
            {
                $set: { status: true },
            }
        );
        userdata = await User.findOne({ _id: _id });
        console.log(userdata);
        res.json({ userdata });
    } else {
        res.status(400);
        throw new Error("No users available");
    }
})



const Unblockbusiness = asyncHandler(async (req, res) => {

    const { _id } = req.body;
    console.log(req.body);

    let user = await User.findOne({ _id: _id });

    if (user) {
        let success = await User.updateOne(
            { _id: _id },
            {
                $set: { status: false },
            }
        );
        userdata = await User.findOne({ _id: _id });
        console.log(userdata);
        res.json({ user });
    } else {
        res.status(400);
        throw new Error("No users available");
    }
})


const blockBusiness = asyncHandler(async (req, res) => {

    const { _id } = req.body;
    console.log(req.body);

    let user = await User.findOne({ _id: _id });

    if (user) {
        let success = await User.updateOne(
            { _id: _id },
            {
                $set: { status: false },
            }
        );
        userdata = await User.findOne({ _id: _id });
        console.log(userdata);
        res.json({ user });
    } else {
        res.status(400);
        throw new Error("No users available");
    }
})


module.exports = { adminlogin, allusers, UnblockUser, blockUser, allbusiness, Unblockbusiness ,blockBusiness}
