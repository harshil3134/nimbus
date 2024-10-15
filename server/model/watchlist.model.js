import mongoose from "mongoose";

const watchlistSchema=new mongoose.Schema({

    userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true,
    unique:true
    },
    watching: [{ type: Number ,unique:true}], // Array of anime IDs
  planToWatch: [{ type: Number,unique:true }],
  completed: [{ type: Number ,unique:true}],
  onHold: [{ type: Number,unique:true }],
  dropped: [{ type: Number,unique:true }],
},{timestamps:true})

export const Watchlist=mongoose.model("Watchlist",watchlistSchema);