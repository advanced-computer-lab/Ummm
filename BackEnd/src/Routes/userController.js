// #Task route solution
const Flights = require('../models/Flights');
const Admins = require('../models/Admins');
const Users = require('../models/User');
const Reservations = require('../models/Reservation');
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


exports.createnewReservation = (req, res) => {
  console.log(req.body);

  const Reservation = new Reservations(req.body)
  Reservation.save()
    .then(result => {
      res.send(result);
      console.log("added");
    })
    .catch(err => {
      res.status(400).send();
      console.log(err);
    });
};

exports.createuseraccount = (req, res) => {
  console.log(req.body);

  const User = new Users(req.body)
  User.save()
    .then(result => {
      res.send(result);
      console.log("added");
    })
    .catch(err => {
      res.status(400).send();
      console.log(err);
    });
};


exports.GetUserInfo = (req, res) => {
  if(Object.keys(req.body).length === 0){   
    console.log(req.body) 
    return res.status(400).send();
  }
       const search ={};

  Object.keys(req.body).forEach(key => {
  if (req.body[key]!==null) {
      search[key] = {$regex: '^' + req.body[key]};
    }
  });
  console.log(search)

Users.find(search)
.then(result => { 
    if(result.length != 0){
      console.log(result)
     res.send(result);
    }
     else 
     res.status(400).send();
    //  console.log(result)
    })
   .catch(err => {
    console.log(err);
   });
};




exports.userinfo = (req,res)=>
{   const key2="Username"
   const search ={};
  search[key2]= {$regex: '^' + req.body[key2],$options: 'ix'};
  Users.find(search).then(result => {
    res.send(result);
    console.log(result)
  })
  .catch(err => {
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

exports.flightmap = (req,res)=>{
  var ID = req.body.var1;
  ID.trim();
 Flights.findOne({'_id':ID}).exec().then(result =>{
  res.send(result);
     console.log('The Flight available seats !');
 }).catch(err => {
     console.log(err);
   });

};


exports.updateflight = (req,res)=>{
  var id = req.body.data.var1;
  Flights.findOneAndUpdate({'_id':id},req.body.data.var2).exec().then(result =>{
      res.status(200).send("Flight updated ");
      console.log('The Flight is Updated successfully !');
  }).catch(err => {
      console.log(err);
    });

};
exports.updateuser = (req,res)=>{

  var username = req.body.data.var1;
  var mail =req.body.data.var3;
  console.log(username)
  console.log(mail)

  if(username===req.body.data.var2.Username && mail===req.body.data.var2.Email){
  Users.findOneAndUpdate({'Username':username},req.body.data.var2).exec().then(result =>{
      res.status(200).send("User updated ");
      console.log('The User is Updated successfully !');
  }).catch(err => {
      console.log(err);
    });

}
else{
  Users.findOneAndUpdate({'Username':username},req.body.data.var2).exec().then(result =>{
    res.status(200).send("User updated ");
    console.log('The User is Updated successfully !');
}).catch(err => {
    console.log(err);
  });
  Reservations.findOneAndUpdate({'Username':username},req.body.data.var2).exec().then(result =>{
    res.status(200).send("User updated ");
    console.log('The Reservation data is Updated successfully !');
}).catch(err => {
    console.log("You don't have Reservations ");
  });
}};


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
        //  console.log(search["Flight_Date"])
          search[key] = { '$gte': start,"$lt": end};
        }
      else if(key=='Economy_Seats' || key=='Business_Seats' || key=='First_Seats'
       || key=='Economy_Baggage' || key=='Business_Baggage' || key=='First_Baggage'
       || key=='Economy_Price ' || key=='Business_Price' || key=='First_Price'){
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
      // console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
};



// const search ={};

// Object.keys(req.body).forEach(key => {
//  if (req.body[key]!==null) {
//     search[key] = {$regex: '^' + req.body[key],     $options: 'ix'};
//   }
//   else {
//    search[key] = {$regex: '' +"    "};
//   }
// });



exports.loginpage = (req, res) => {

    if(Object.keys(req.body).length === 0){    
      return res.status(400).send();
    }
         const search ={};

    Object.keys(req.body).forEach(key => {
    if (req.body[key]!==null) {
        search[key] = {$regex: '^' + req.body[key]};
      }
    });
  
  Admins.find(search)
 .then(result => { 
      if(result.length != 0){
       res.send(result);
      }
       else 
       res.status(400).send();
      })
     .catch(err => {
      console.log(err);
     });
 };


 exports.userlogin = (req, res) => {

  console.log(req.body);
  if(Object.keys(req.body).length === 0){    
    return res.status(400).send();
  }
       const search ={};

  Object.keys(req.body).forEach(key => {
  if (req.body[key]!==null) {
      search[key] = {$regex: '^' + req.body[key]};
    }
  });

Users.find(search)
.then(result => { 
    if(result.length != 0){
     res.send(result);
    }
     else 
     res.status(400).send();
    })
   .catch(err => {
    console.log(err);
   });
};

exports.reservationinfo = (req,res)=>{
  const key2="Username"
  const search ={};
 search[key2]= {$regex: '^' + req.body[key2],$options: 'ix'};
  Reservations.find(search).then(result =>{
      console.log(result);
      res.send(result);
  }).catch(err => {
      console.log(err);
    });

}
exports.flightinfo = (req,res)=>{

  var Flightid1 = req.body.data.var1;
  var Flightid2 = req.body.data.var1;
  console.log(Flightid1)


  Flights.find({'_id':Flightid1}).exec().then(result =>{
      console.log(result);
      res.send(result);
  }).catch(err => {
      console.log(err);
    });
  Flights.find({'_id':Flightid2}).exec().then(result =>{
      console.log(result);
      res.send(result);
  }).catch(err => {
      console.log(err);
    });

}