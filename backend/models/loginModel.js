const mongoose = require("mongoose")
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
        pic: {
            type: String,
            required: true,
            default:
                "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },
        status: {
            type: Boolean,
            required: true,
            default: true
        },
        type: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);



// will encrypt password everytime its saved
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};
const User = mongoose.model("user", userSchema);
module.exports = User;