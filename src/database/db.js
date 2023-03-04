const mongoose = require("mongoose")

const connectDatabase = () =>{
    console.log("Connecting to Database...")
    mongoose.connect("mongodb+srv://root:root@cluster0.4afe9mg.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch(e => console.log(e))
}

module.exports = connectDatabase