const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connect to Mongodb");
    }catch(error){
        console.log("Failed to connect DB", error);
        process.exit(1);
    }
};

module.exports = connectDB;