const app = require(".");
//import connectDb from "./config/db";
const connectDb = require("./config/db");
const PORT = 5454;
app.listen(PORT, async()=>{
    await connectDb();
    console.log("ecommerce api listening on port", PORT);
})