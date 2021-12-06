const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Id .....
<<<<<<< HEAD
=======
    // unique : true,
    // dropDups: true
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1

const flightsSchema = new Schema({

  // _id: {type: String,
  //    auto: true},

  Flight_No: {
    type: String,
    required: true,
<<<<<<< HEAD
    unique : true,
    dropDups: true
=======
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
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
  // Cabin: {
  //   type: String,
  //  required: true
  // },
=======
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
  Terminal: {
    type: String,
   required: true
  },
<<<<<<< HEAD
=======
  Flight_Duration: {
    type: String,
   required: true
  },
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
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
  }
=======
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
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1

}, { timestamps: true });

mongoose.models = {}
const Flights = mongoose.model('Flights', flightsSchema);
module.exports = Flights;
