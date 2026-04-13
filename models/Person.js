const mongoose= require('mongoose');

//Define the persons details
const personSchema=new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },
    mobile:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    salary:{
        type:Number,
        required:true
    }
});

//create persons model
const Person=mongoose.model('person',personSchema);
module.exports=Person;
