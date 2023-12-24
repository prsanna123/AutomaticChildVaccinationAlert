const mongoose=require("mongoose");
// mongoose.connect("mongodb://localhost:27017/mydb",{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })
// const mongoURI="mongodb://0.0.0.0:27017/project"
const mongoURI="mongodb+srv://Lakshmi:MOD9vx7y6NR4TIsV@cluster0.dmhrq.mongodb.net/?retryWrites=true&w=majority"
const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(mongoURI) 
        console.log('Mongo connected')
    } catch(error) {
        console.log(error)
        process.exit()
    }
}

connectDB()