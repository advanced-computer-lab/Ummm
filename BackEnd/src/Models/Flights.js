const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Id .....
<<<<<<< HEAD
<<<<<<< HEAD
=======
    // unique : true,
    // dropDups: true
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
=======
    // unique : true,
    // dropDups: true
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40

const flightsSchema = new Schema({

  // _id: {type: String,
  //    auto: true},

  Flight_No: {
    type: String,
    required: true,
<<<<<<< HEAD
<<<<<<< HEAD
    unique : true,
    dropDups: true
=======
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
=======
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
  },   
  From: {
    type: String,
   required: true,
  },
  To: {
    type: String,
   required: true
  },
  Flight_Date: {
    type: Date,
   required: true,
  },
<<<<<<< HEAD
<<<<<<< HEAD
  // Cabin: {
  //   type: String,
  //  required: true
  // },
=======
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
=======
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
  Terminal: {
    type: String,
   required: true
  },
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
  Flight_Duration: {
    type: String,
   required: true
  },
<<<<<<< HEAD
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
=======
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
  Economy_Seats: {
    type: Number,
   required: true
  },
  Business_Seats: {
    type: Number,
   required: true
  },
  First_Seats: {
    type: Number,
   required: true
<<<<<<< HEAD
<<<<<<< HEAD
  }
=======
=======
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
  },
  Economy_Baggage: {
    type: Number,
   required: true
  },
  Business_Baggage: {
    type: Number,
   required: true
  },
  First_Baggage: {
    type: Number,
   required: true
  },
  Economy_Price: {
    type: Number,
   required: true
  },
  Business_Price: {
    type: Number,
   required: true
  },
  First_Price: {
    type: Number,
   required: true
  },
  Available_Seats: {
    type: [Boolean],
  },
<<<<<<< HEAD
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
=======
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40

}, { timestamps: true });

mongoose.models = {}
const Flights = mongoose.model('Flights', flightsSchema);
module.exports = Flights;
