import { newtoken } from "../lib/utils";
import { user } from "../models/user";
import bycrypt from "bycryptjs"
export const signup = async(req, res) =>{
    const {email, fullname, profilepic, pass, bio} = req.body;
    try{
        if(!fullname||!email||!pass)
        {
            return res.json({success: false, message: "missing details"});
        }
        const User = await user.findOne({email})
        if(User) return res.json({success: false, message: "acc already exists"})
        const salt = await bycrypt.genSalt(10);
        const pass = await bycrypt.hash(password, salt);
        const newuser = await user.create({
            fullname, email, password: pass, bio
        });
        await newuser.save();
        const token = newtoken(newuser._id);
        res.json({success:true, userData: newuser, message: "acc created successfully"});
    } catch(e){
        console.log(e.message);
        res.json({success:false, message: "could not create account"});
    }
    return res.json({success: true})
}

export const login = async(req, res) =>{
    const {email, pass} = req.body;
    if(!email||!pass)
    {
        return res.json({success: false, message: "missing email or password"})
    }
    try{
        const newuser = await user.findOne({email});
        if(!newuser)
        {
            return res.json({success: false, message: "Email not found"});
        }
        const ismatch = bcrypt.compare(newuser.password, pass);
        if(!ismatch)
        {
            return res.json({success: false, message: "Incorrect password"})
        }
        return res.json({success: true})
    }catch(e){
        console.log(e.message);
        res.json({success:false, message: "could not create account"});
    }
}