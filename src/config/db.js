const mongoose = require("mongoose");

const mongodbUrl = "mongodb+srv://iamsoumyaagrawal:iKvMiAYgqyiSKiJk@cluster0.63xmfi2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDb = async () => {
    try {
        await mongoose.connect(mongodbUrl);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDb;
