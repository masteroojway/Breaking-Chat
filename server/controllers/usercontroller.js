export const signup = async(req, res) =>{
    const {email, fullname, profilepic, pass, bio} = req.body;
    try{
        if(!fullname||!email||!pass)
        {
            return res.json({success: false, message: "missing details"});
        }
    } catch(e){

    }
}