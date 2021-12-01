const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({

  Flight_NoFrom: {
    type: String,
    required: true,
  },
  Flight_DateFrom: {
    type: Date,
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
  Cabin: {
    type: Number,
   required: true
  },
  Price: {
    type: Number,
   required: true
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
    unique: true
  },
  Email: {
    type: String,
    required: true,
},  

}, { timestamps: true });

mongoose.models = {}
const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;
