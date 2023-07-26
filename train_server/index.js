const express = require('express')
const bodypraser = require('body-parser')
const app =express()
const cors = require('cors');

 app.use(express.json());
 app.use(bodypraser({extended:false}))
 app.use(bodypraser.json());
 app.use(cors());
 const reg=[];
 app.post('/api/register',(req,res)=>
 {
   const { trainName, trainNumber, fromPlace, toPlace, numOfSeats } = req.body;
   reg.push({
      trainName,
      trainNumber,
      fromPlace,
      toPlace,
      numOfSeats,
    });
    res.status(200).json({ message: 'Registeration successfull!', data: req.body });
 })

 const port = 8080;
 app.listen(port,()=>{
    console.log(`server is running on the port:${port}....`)
 })
