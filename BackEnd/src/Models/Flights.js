const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Id .....

const flightsSchema = new Schema({

  // _id: {type: String,
  //    auto: true},

  Flight_No: {
    type: String,
    required: true,
    unique : true,
    dropDups: true
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
  // Cabin: {
  //   type: String,
  //  required: true
  // },
  Terminal: {
    type: String,
   required: true
  },
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
  }

}, { timestamps: true });

mongoose.models = {}
const Flights = mongoose.model('Flights', flightsSchema);
module.exports = Flights;
