const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  
  Flight_IDFrom: {
    type: String,
    required: true,
  },
  Flight_NoFrom: {
    type: String,
    required: true,
  },
  Flight_DateFrom: {
    type: Date,
   required: true,
  },
  PriceTotalFrom: {
    type: Number,
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
  PriceTotalTo: {
    type: Number,
   required: true
  },




  Cabin: {
    type: String,
   required: true
  },
  SeatsChoosen: {
    type: [Number],
    required: true,
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
