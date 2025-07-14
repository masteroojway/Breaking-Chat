import mongoose from "mongoose";

const userschema = new mongoose.userschema({
    email: {type: String, required: true, unique: true},
    fullName: {type: String, required: true, unique: true},
    profilePic: {type:String, default: ""},
    password: {type: String, required: true, minLength: 6},
    bio: {type: String, default:"You know who I am. I'm the one who's always online. The one who never misses a message. Now, say my name. Ur god damn right."},
    verifyotp: {type: String, default: ""},
    veridyotpat: {type: Number, default: 0},
    isaccverified: {type: Boolean, default: false}
}, {timestamps: true})

export const user = mongoose.models.user || mongoose.model("User", userschema);