import { catchAsyncErrors } from "../middleware/catchAsyncErrors.js";
import ErrorHandler from "../middleware/error.js";
import { User } from "../model/user.model.js";
import { sendToken } from "../utils/jwtToken.js";
import { createWatchlist } from "./watchlistController.js";




export const register=catchAsyncErrors(async (req,res,next)=>{
    let {userName,email,profilePicture,password}=req.body;

    console.log(req.body)
    if(!userName || !email || !password)
    {
        return next(new ErrorHandler("Please fill full form!!",400));
    }
        const isEmail=await User.findOne({email});
        if(isEmail)
        {
            return next(new ErrorHandler("email already exists",400));
            
        }
        const isusername=await User.findOne({userName});
        if(isusername)
        {
            return next(new ErrorHandler("UserName already exists",400));
         
        }
        const user=await User.create({
            userName,
             email,
             password,
             profilePicture

        });

         await createWatchlist(user);
      //  sendToken(user, 201, res, "User Registered!");
        res.status(200).json({
          success:true,
          message:"user created "
        })
});

export const login=catchAsyncErrors(async(req,res,next)=>{

let {input,password}=req.body

if((!input) || !password )
{
    return next(new ErrorHandler("Enter All Information",400));
}

const isEmail=/\S+@\S+\.\S+/.test(input);

let user;
if(isEmail)
{
   user=await User.findOne({email:input}).select("+password");

}
else{
    user=await User.findOne({userName:input}).select("+password");
}
console.log("user",user);
if(!user)
{
    return next(new ErrorHandler("User Does not Exists",400));
    
}

const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Incorrect Password",400));
  }

  sendToken(user, 201, res, "User Logged IN!");
});

export const logout = catchAsyncErrors(async (req, res, next) => {
    res.status(201)
      .cookie("token", "", {
        httpOnly: true,
        expires: new Date(Date.now()),
      })
      .json({
        success: true,
        message: "Logged Out Successfully.",
      });
  });