const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/Menu');

//post for menu items
router.post('/',async (req,res)=>{
    try{
        const data = req.body //assuming the request body contains the menu item data
        //create a new menu item using the data from the request body
        const newMenuItem = new MenuItem(data);
        //save the menu item to the database
        const response = await newMenuItem.save();
        console.log('Menu item saved');
        res.status(201).json(response);
    }
    catch(err){
        console.log("FULL ERROR 👉", err);
        res.status(500).json({error: 'Internal server error'});
    }
});

//get method to get the menu items
router.get('/',async (req,res)=>{
    try{ 
        const menuItems = await MenuItem.find();
        console.log('Menu items fetched');
        res.status(200).json(menuItems);
    }
    catch(err){
        console.log("FULL ERROR 👉", err);
        res.status(500).json({error:'Internal server error' });
    }
});

//comment added for com
module.exports=router;
