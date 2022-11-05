const mongoose = require("mongoose")    

const postSchema = mongoose.Schema(
    {
        disription: {
            type: String,
            required: true,
        }, 
        userId: {
            type:mongoose.SchemaTypes.ObjectId,
            ref:'user',
            required: true,
        },
        image: {
            type: String,
            required: true,
        },

        publicId: String,
        likes: [ ]
    },
    {
        timestamps: true,
    }
);



const Post = mongoose.model("posts", postSchema);
module.exports = Post;