
// console.log("Server is running...");
// function add(a,b){
//     return a+b;
// }

// var result =add(2,9);
// var add=(a,b) => a+b;

// console.log(add(2,9));

// (function(){
//     console.log("I am an Engineer"); 
// })();


//callback function

    // const add=(a,b,Callback)=>{
    //     console.log(a*b);
    //     Callback();
    // }
    // add(2,3,()=>{console.log("I am an Engineer");});


//use of os and fs module
    // var fs= require('fs');
    // var os= require('os');

    // var user=os.userInfo();
    // console.log(user);
    // console.log(user.username);

    // fs.appendFile('greeting.txt','hii'+user.username+'!\n',()=>{console.log("heyy");

    // });


//By requaring nodejs file
    // const notes=require('./notes.js');
    // console.log("server file is available");
    // var age =notes.age;
    // var result= notes.addnum(age+18,10);
    // console.log(age);
    // console.log("result is now"+result);



//By requaring Lodash
    // var _=require( 'lodash');
    // var data=["hello",1,2,7,4,"heyy","hlw","heyy"];
    // var filter=_.uniq(data);
    // console.log(filter);
    // console.log(_.isString("heyy"));//check if the data is string or not


//convert String to Object
// const jsonString='{"name":"Gayatri","age":25,"city":"bbsr"}';
// const jsonObj=JSON.parse(jsonString);
// console.log(jsonObj.name);

// //convert Object to String
// const jsonToConvert={"name":"Gayatri",
//     "age":25,
//     "city":"bbsr"};
//     const json=JSON.stringify(jsonToConvert);
//     console.log(json);



//creating server using expres
    // import express from 'express'
        const express=require('express')
        const app = express();

// //for connection of MongoDB withe the server
//      const db =require('./db');

//      const bodyParser=require('body-parser');
//      app.use(bodyParser.json());//req.body


//Get post method for server
    // app.get('/chicken',(req,res)=>{
    //     res.send("Sure sir,Chicken is available!");
    // })
    // app.get('/Dosa',(req,res)=>{
    
    //     var custumized_Dosa={
    //         name:"Mashala Dosa",
    //         size:'10cm',
    //         is_sambar:true,
    //         is_chatni:true
    //     }
    //     res.send(custumized_Dosa);
    // })
    // app.post('/items',(req,res)=>{
    // res.json('data is saved');
    //})



//for mongo db connection of a persons schema or model
const Person = require('./models/Person');
const MenuItem = require('./models/Menu');
//like a Menu 
app.get('/', (req, res) => {
res.send('Hello sir, Wellcome to the Hotel')
})

//for connection of MongoDB withe the server
const db =require('./db');
app.use(express.json());

//post route to add a person
//         app.post('/person',async (req,res)=>{
//               try{
//                 const data = req.body //asuming the request body constains the person data
//             //create a new person using the data from the request body
//             const newperson = new Person(data);
//             //save the person to the database
//             const response= await newperson.save();
//             console.log('data saved');
//             res.status(201).json(response);
//            }
//            catch(err){
//     console.log("FULL ERROR 👉", err);
//     res.status(500).json({error: 'Internal server error'});
// }});

//Get method to get the person
// app.get('/person',async (req,res)=>{
//     try{
//         const person= await Person.find();
//         console.log('data fetched');
//         res.status(200).json(person);
//     }
//     catch(err){
//         console.log("FULL ERROR 👉", err);
//         res.status(500).json({error:'Internal server error' });
//     }
// });




// //post for menu items
// app.post('/menu',async (req,res)=>{
//     try{
//         const data = req.body //assuming the request body contains the menu item data
//         //create a new menu item using the data from the request body
//         const newMenuItem = new MenuItem(data);
//         //save the menu item to the database
//         const response = await newMenuItem.save();
//         console.log('Menu item saved');
//         res.status(201).json(response);
//     }
//     catch(err){
//         console.log("FULL ERROR 👉", err);
//         res.status(500).json({error: 'Internal server error'});
//     }
// });

// //get method to get the menu items
// app.get('/menu',async (req,res)=>{
//     try{ 
//         const menuItems = await MenuItem.find();
//         console.log('Menu items fetched');
//         res.status(200).json(menuItems);
//     }
//     catch(err){
//         console.log("FULL ERROR 👉", err);
//         res.status(500).json({error:'Internal server error' });
//     }
// });



// app.get('/person/:worktype',async (req,res)=>{
//     const worktype=req.params.worktype;
//     try{
//         if(worktype=='chef' || worktype=='waiter' || worktype=='manager'){
//             const person= await Person.find({work:worktype});
//             console.log('data fetched');
//             res.status(200).json(person);
//         }
//         else{
//             res.status(404).send(`Sorry sir,${worktype} is not available!`);
//         }
//     }
//     catch(err){
//         console.log("FULL ERROR 👉", err);
//         res.status(500).json({error:'Internal server error' });
//     }
// });

//import the router files
const personRoutes=require('./routes/personRoutes');
const menuRoutes=require('./routes/menuRoutes');
//use the router files
app.use('/person', personRoutes);
app
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

