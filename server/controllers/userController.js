const User=require("../model/userModel")
const bcrypt=require("bcrypt");

module.exports.register= async(req,res,next)=>{
    try{
        const {username,email,password}=req.body;
const usernameCheck= await User.findOne({username});
if (usernameCheck)
return res.json({msg: "username already used",status:false});
const emailCheck = await User.findOne({email});
if(emailCheck) return res.json({msg:"email already used",status:false})
const hashedPassword =await brcypt.hash(password,10);
const user =await User.create({
    email,username,password:hashedPassword,
});
delete user.password;
return res.json;
    }
    catch(ex){
        next(ex);
    }

}