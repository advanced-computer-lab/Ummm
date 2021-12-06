
// External variables
const express = require("express");
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const userController = require('./Routes/userController');
const cors = require('cors')
const dotenv = require("dotenv")
dotenv.config();


// // app.js
// const connectDB = require('./config/db');
// // Connect Database
// connectDB();



//App variables
const app = express();
const port = process.env.PORT || "8000";
// #Importing the userController
app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads// configurations
const MongoURI = 
'mongodb+srv://'+process.env.DB_USERNAME+':'+process.env.DB_PASSWORD+'@cluster0.nvdj3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
;
mongoose.connect(MongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result =>console.log("MongoDB is now connected") )
.catch(err => console.log(err));



var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
      user:"user62kk@gmail.com", 
      pass:"192837192837"
  }
});

var mailoptions={
to: 'ahmed.eltawel35@gmail.com',
subject: "Reservation Cancellation",
text: "Email Test Has Passed"
}

// transporter.sendMail(mailoptions, function (error, info, callback){
// if(error){
//   console.log(error);
// }else{
//   console.log('Message sent: ' + info.response);
// }
// });

app.get("/home", (req, res) => {
    res.status(200).send("You have everything installed !");
  });

  app.post("/sendmail", (req, res) => {
    console.log("we have reached hereeee")
    mailoptions.to=req.body.data.var2
    mailoptions.text='Hello Dear Customer,\nYour Reservation has been successfully cancelled and you will be refunded with $'.concat(req.body.data.var1)+'\nHope to see you fly with us again,\nFly Nawww.';
    transporter.sendMail(mailoptions, function (error, info, callback){
      if(error){
        console.log(error);
      }else{
        console.log('Message sent: ' + info.response);
      }
      });

  });
//Flight and admin
app.post('/createflight', userController.createflight)
app.get('/viewflights',userController.viewflights)
app.delete('/deleteflight',userController.deleteflight)
app.put('/updateflight',userController.updateflight)
app.post('/searchflight',userController.searchflight)
app.post('/loginpage',userController.loginpage)

//User
app.post('/createuseraccount', userController.createuseraccount)
app.post('/userlogin',userController.userlogin)
app.post('/createnewReservation',userController.createnewReservation)
app.post('/GetUserInfo',userController.GetUserInfo)
app.post('/userinfo',userController.userinfo)
app.put('/updateuser',userController.updateuser)
app.post('/reservationinfo',userController.reservationinfo)
app.post('/flightmap',userController.flightmap)
app.put('/updateseats',userController.updateseats)
app.put('/updatereservationseats',userController.updatereservationseats)
app.delete('/deletereservation',userController.deletereservation)



// Starting server
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });
