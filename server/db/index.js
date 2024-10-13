import mongoose from 'mongoose';

const connectDb=async function(){


// Connect to MongoDB
mongoose.connect(`${process.env.MONGODB_URI}`)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));
}

export {connectDb}