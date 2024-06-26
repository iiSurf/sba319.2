import mongoose from 'mongoose';
const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps:true,
});

usersSchema.index({email: 1});

export default new mongoose.model('users', usersSchema);

// for put .findOneAndUpdate to update user profile and .delete is just delete. Then post
// .save with post http method to create a user profile
// delete is .deleteOne delete user profile. .deleteOne({key: username}) route(:id) parameter in url