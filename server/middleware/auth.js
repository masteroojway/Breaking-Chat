import { user } from "../models/user";
import jwt from "jsonwebtoken"

export async function protectroute(req, res, next) {
    try {
        const token = req.headers.token;
        const decode = jwt.verify(token, process.env.JWTTOKEN);
        const usertemp = await user.findById(decode.userId).select("-password");
        if(!user) return res.status(404).json({message: "user not found"});
    } catch (error) {
        
    }
}