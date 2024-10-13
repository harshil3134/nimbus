import { faTruckMedical } from "@fortawesome/free-solid-svg-icons";
import mongoose  from "mongoose";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import validator from "validator";

const userSchema=new mongoose.Schema({

userName:{
type:String,
required:true,
unique:true,
trim:true,
index:true
},
email:{

type:String,
validator:[validator.isEmail,"please provide a valid email"],
required:true,
unique:true,
trim:true,
index:true
},

password:{
    type:String,
    required:true,
    minlength:6,
    maxlenght:32,
},
profilePicture:{
type:String,
default:"https://www.gravatar.com/avatar/?d=identicon"
},



},{timestamps:true})


userSchema.pre("save",async function (next) {
    if(!this.isModified("password")){
        next();
    }
    this.password=await bcrypt.hash(this.password,10);
});

//comparing the user password in db with password entered by user

userSchema.methods.comparePassword=async function(enteredPassword)
{
    return await bcrypt.compare(enteredPassword,this.password);
};

//generating a jwt token when a user registers or logins 
userSchema.methods.getJWTToken=function()
{
    return jwt.sign({
        id:this._id,
        userName:this.userName},
    process.env.JWT_SECRET_KEY,
{
    expiresIn:process.env.JWT_EXPIRES,
})
}



export const User=mongoose.model('User',userSchema);