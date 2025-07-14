import jwt from "jsonwebtoken";

export const newtoken = (userID)=>{
    const token = jwt.sign({id: userID}, process.env.JWTTOKEN, {expiresIn: '7d'})
}