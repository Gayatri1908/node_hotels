const mongoose=require('mongoose');
//Defining the mongodb connection URL
const MongoURL='mongodb://localhost:27017/Hotel';

//Connecting to the mongodb server using mongoose
mongoose.connect(MongoURL)

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