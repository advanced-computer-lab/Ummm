
// External variables
const express = require("express");
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const userController = require('./Routes/userController');
const cors = require('cors')
const dotenv = require("dotenv")
dotenv.config();
const Admins = require('../src/Models/Admins.js');
const Users = require('../src/Models/User.js');
const RefreshTokens = require('../src/Models/RefreshTokens.js');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require('cookie-parser');




// // app.js
// const connectDB = require('./config/db');
// // Connect Database
// connectDB();

// let refreshTokens = []


//App variables
const app = express();
const port = process.env.PORT || "8000";
// #Importing the userController
app.use(cors())
app.use(cookieParser())
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
app.post('/createflight',authenticateToken ,userController.createflight)
app.get('/viewflights', authenticateToken ,userController.viewflights)
app.delete('/deleteflight' ,userController.deleteflight)
app.put('/updateflight' ,userController.updateflight)
app.post('/searchflight' ,userController.searchflight)
// (req, res) => { 
//   console.log("rtyuio")
//   console.log(res.data.RefreshToken)
//   refreshTokens.push(res.data.RefreshToken)
// })

//User
app.post('/createuseraccount' ,userController.createuseraccount)
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






app.post('/loginpage' ,  async (req, res) => {
  Admins.findOne({Username: req.body.Username}) 
  .then(dbUser => { 
    if (!dbUser) { 
      console.log(dbUser)
      return res.status(401).send("Username does not Exist!");
      //  res.json({ 
      //   message: "Invalid Username or Password" 
      // }) 
   }
  bcrypt.compare(req.body.Password, dbUser.Password) 
  .then(isCorrect => {
    if (isCorrect) {
       const payload = { 
         id: dbUser._id, 
         username: dbUser.Username, 
    } 
   const AccessToken =  jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: 10}) //15 mins
    jwt.sign(payload,process.env.REFRESH_TOKEN_SECRET, {expiresIn: 30},
        (err, token) => { 
          if (err) return res.json({message: err}) 
        //  refreshTokens.push(token)
        //  console.log(refreshTokens)
        
        var userid = dbUser._id.toString()
        var Refresh = {}
        Refresh['UserID'] = userid
        Refresh['RefreshToken'] = token
        const RefreshToken = new RefreshTokens(Refresh)
        // console.log(RefreshToken)

        RefreshTokens.findOne({UserID: userid}) 
        .then(dbUser => { 
          if (!dbUser) { 
                console.log("NOT FOUND!!")
                RefreshToken.save()
                .then(result => {
                })
                .catch(err => {
                  console.log(err);
                })
          }
          else{
            console.log("FOUND!!")
            RefreshTokens.findOneAndUpdate({'UserID':userid},Refresh).exec().then(result =>{
          }).catch(err => {
              console.log(err);
            });
          }
        })

          return res.json({ message: "Success",
           AccessToken: "Bearer " + AccessToken,
          RefreshToken: token,
          UserID: userid
         }) 

      })
     } else{
      return res.status(403).send("Incorrect Password!");
             }
         })
         .catch(err => {
          res.status(500).send('Internal server error');
      })
      })
  })






  app.delete('/logout', (req, res) => {
    var del = req.body.ID
    RefreshTokens.findOneAndDelete({'UserID':del}).exec().then(result =>{
      res.status(204).send("RefreshToken Deleted");
  }).catch(err => {
      console.log(err);
    });
  })





  


function authenticateToken(req, res, next) {

  // console.log(req.headers.accesstoken)
  // console.log("Accessssssss")
  // console.log(req.headers.refreshtoken)
  // console.log("innnn")
  // next()
 
   var AccessToken = req.headers.accesstoken
   const RefreshToken = req.headers.refreshtoken

   req.AccessToken = AccessToken

  //  console.log(req.headers.accesstoken)
   const token = AccessToken && AccessToken.split(' ')[1]
   if (token == null) return  res.status(403).send("Access Token Not Found!")
 else{
   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
     if(!err){
            console.log("AccessToken Usedddddddd")
            res.cookie("testttt","aoaoaoaoaoa",{
              path: "/",
              httpOnly: false,
            })
            next() 
     }
     if (err) {
      console.log("AccessToken Expireddddd")
      //  return res.sendStatus(403)
      if (RefreshToken == null) return res.sendStatus(401)
      RefreshTokens.findOne({'RefreshToken':RefreshToken}) 
      .then(Token => { 
        if (!Token) { 
          console.log("refreshtokennnnnn not in active sessionnnn")
          return res.status(403).send("Refresh Token Not in DB!");
        }
        else{
          console.log("refreshToken Founddd in DBBB")
        jwt.verify(RefreshToken, process.env.REFRESH_TOKEN_SECRET ,(err, user) => {
          console.log("Refresh Token Expireddddd!")
        if (err) { 
          return res.status(403).send("Refresh Token Expired 'LogIn Again' !"); //res.sendStatus(407); //res.sendStatus(403)
        }
        else{
        const payload = { 
          id: user.id, 
          username: user.username, 
     } 
     console.log(payload)
     AccessToken =  jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: 10}) //15 mins
     console.log(AccessToken)
     req.AccessToken = AccessToken
      next() 
        }
      })
        }

      })
     }
    
   })
  }

 }


// Starting server
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });
