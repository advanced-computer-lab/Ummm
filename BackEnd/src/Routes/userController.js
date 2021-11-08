// #Task route solution
const Flights = require('../models/Flights');
const Admins = require('../models/Admins');
const moment = require('moment');
const today = moment().startOf('day');


exports.createflight = (req, res) => {
  console.log(req.body);

  const flight = new Flights(req.body)
  flight.save()
    .then(result => {
      res.send(result);
      console.log("added");
    })
    .catch(err => {
      res.status(400).send();
      console.log(err);
    });
};


exports.viewflights = (req,res)=>
{
  Flights.find().then((result)=>{
        res.header("Content-Type",'application/json');
        res.send(JSON.stringify(result, null, 4));
    });
};


exports.deleteflight = (req,res)=>{
  var del = req.body.var1;
  del.trim();
 Flights.findOneAndDelete({'_id':del}).exec().then(result =>{
     res.status(200).send("Flight Deleted ");
     console.log('The Flight is Deleted successfully !');
 }).catch(err => {
     console.log(err);
   });

};


exports.updateflight = (req,res)=>{
  var id = req.body.data.var1;
  console.log(req.body.data.var1);
  console.log(req.body.data.var2);
  Flights.findOneAndUpdate({'_id':id},req.body.data.var2).exec().then(result =>{
      res.status(200).send("Flight updated ");
      console.log('The Flight is Updated successfully !');
  }).catch(err => {
      console.log(err);
    });

};


exports.searchflight = (req, res) => {

 const search ={};
 var dd;
 var ss;
  Object.keys(req.body).forEach(key => {

   if (req.body[key]!==null) {
      if(key=='Flight_Date'){
        dd = (req.body[key]);
        var start = moment(dd).startOf('day');
        var end = moment(dd).endOf('day'); 
        search[key] = { '$gte': start,"$lt": end};
      }
      else if(key=='Economy_Seats' || key=='Business_Seats' || key=='First_Seats'){
        ss = (req.body[key]); 
        search[key] = ss;
      }
      else{
      search[key] = {$regex: '^' + req.body[key],     $options: 'ix'};
      }
    }
    
  });

  console.log(search);

Flights.find(search)
.then(result => {
      res.send(result);
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
};




exports.loginpage = (req, res) => {

  const search ={};
   Object.keys(req.body).forEach(key => {
 
    if (req.body[key]!==null) {
       search[key] = {$regex: '^' + req.body[key],     $options: 'ix'};
     }
   });
 
  Admins.find(search)
 .then(result => {
       res.send(result);
     })
     .catch(err => {
       console.log(err);
     });
 };
