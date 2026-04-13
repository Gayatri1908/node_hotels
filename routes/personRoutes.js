const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');

//post route to add a person
        router.post('/',async (req,res)=>{
              try{
                const data = req.body //asuming the request body constains the person data
            //create a new person using the data from the request body
            const newperson = new Person(data);
            //save the person to the database
            const response= await newperson.save();
            console.log('data saved');
            res.status(201).json(response);
           }
           catch(err){
    console.log("FULL ERROR 👉", err);
    res.status(500).json({error: 'Internal server error'});
}});

//Get method to get the person
router.get('/',async (req,res)=>{
    try{
        const person= await Person.find();
        console.log('data fetched');
        res.status(200).json(person);
    }
    catch(err){
        console.log("FULL ERROR 👉", err);
        res.status(500).json({error:'Internal server error' });
    }
});

router.get('/:worktype',async (req,res)=>{
    const worktype=req.params.worktype;
    try{
        if(worktype=='chef' || worktype=='waiter' || worktype=='manager'){
            const person= await Person.find({work:worktype});
            console.log('data fetched');
            res.status(200).json(person);
        }
        else{
            res.status(404).send(`Sorry sir,${worktype} is not available!`);
        }
    }
    catch(err){
        console.log("FULL ERROR 👉", err);
        res.status(500).json({error:'Internal server error' });
    }
});

router.put('/:id',async (req,res)=>{
    try{
        const id=req.params.id;
        const updatedPersondata=req.body;
        
        const response=await Person.findByIdAndUpdate(id,updatedPersondata,{
        new:true,//to return the updated document
        runValidators:true//run mangoose validators on the updated data
        });
        if(!response){
            return res.status(404).json({error:'Person not found'});
        }
        console.log('data updated');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error' });
    }
});
router.delete('/:id',async (req,res)=>{
    try{
        const id=req.params.id;
        const response=await Person.findByIdAndDelete(id);
        if(!response){
            return res.status(404).json({error:'Person not found'});
        }
        console.log('data deleted');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error' });
    }
});

module.exports=router;