const mongoose=require('mongoose');
require('dotenv').config();
//Defining the mongodb connection URL
//const MongoURL=process.env.MONGO_URL_local;//for local connection
const MongoURL='mongodb+srv://Gayatri1234:Gayatri1234@cluster0.uakjsu0.mongodb.net/';


//Connecting to the mongodb server using mongoose
mongoose.connect(MongoURL);

const db=mongoose.connection;

//Event listeners for the connection
db.on('connected',()=>{
    console.log('Connected to MongoDB successfully');
});

db.on('error',(err)=>{
    console.error('Error connecting to MongoDB:',err);
});
db.on('disconnected',()=>{
    console.log('Disconnected from MongoDB');
});

//export the modules
module.exports=db;
