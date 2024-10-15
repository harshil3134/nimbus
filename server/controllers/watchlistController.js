
import { catchAsyncErrors } from "../middleware/catchAsyncErrors.js";
import ErrorHandler from "../middleware/error.js";
import { Watchlist } from "../model/watchlist.model.js";

export const createWatchlist=async(user)=>{

    
        if(user._id)
        {
            console.log(user._id);
            const watchlist=await Watchlist.create({
                userId:user._id,

            })


        }
}

export const addToWatchlist=catchAsyncErrors(async(req,res,next)=>{

let id=req.user.id;
let anime_id=req.body.anime_id;
let category=req.body.category;
//category watching , planToWatch, completed, onHold , dropped
   
let watchlist=await Watchlist.findOne({userId:new Object(req.user.id)});
    if(!watchlist)
    {
          watchlist=await Watchlist.create({
              userId:id,
            })
    }


watchlist[category].push(anime_id);
await watchlist.save();



    res.status(200).json({
        success:true,
        message:"added to watchlist",
        isWatchlist:watchlist
    })




})

export const removeFromWatchlist=catchAsyncErrors(async(req,res,next)=>{

    let id=req.user.id;
    let anime_id=req.body.anime_id;
    let category=req.body.category;

    let watchlist=await Watchlist.findOne({userId:id});
    // console.log(watchlist.watching)
    if(!watchlist)
    {
        return next(new ErrorHandler("Nothing to be removed from the Watchlist!",400));
    }

   watchlist[category]=watchlist[category].filter(ele=>ele!=anime_id)

await watchlist.save();

    res.status(200).json({
        success:true,
        message:"removed anime",
        
    })

})


export const fetchAll=catchAsyncErrors(async(req,res,next)=>{
   let id=req.user._id;

   let watchlist=await Watchlist.findOne({userId:id});
   if(watchlist)
   {


    res.status(200).json({
        success:true,
        message:"anime fetched",
        watchlist:watchlist
        
    })
   }
   else{
    return next(new ErrorHandler("watchlist does not exixts !!",400));
   } 

})



