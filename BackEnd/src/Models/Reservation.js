const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({


  

//Flight From Info

  Flight_IDFrom: {
    type: String,
    required: true,
  },
  Flight_NoFrom: {
    type: String,
    required: true,
  },
  Flight_From: {
    type: String,
    required: true,
  },
  Flight_To: {
    type: String,
    required: true,
  },
  Flight_DateFrom: {
    type: Date,
   required: true,
  },
  CabinFrom: {
    type: String,
   required: true
  },
  Flight_IDTo: {
    type: String,
    required: true,
  },
  Flight_NoTo: {
    type: String,
    required: true,
  },
  Flight_DateTo: {
    type: Date,
   required: true,
  },
  CabinTo: {
    type: String,
   required: true
  },
  TotalPrice: {
    type: Number,
   required: true
  },
  SeatsChoosenFrom: {
    type: [String],
  }, 
  SeatsChoosenTo: {
    type: [String],
  }, 
  SeatsChoosenFromID: {
    type: [Number],

  },

  SeatsChoosenToID: {
    type: [Number],

  }, 

  Children: {
    type: Number,
   required: true
  },
  Adults: {
    type: Number,
   required: true
  },

  Username: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
},
 


}, { timestamps: true });

mongoose.models = {}
const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;

