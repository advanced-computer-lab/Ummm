const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Adminschema = new Schema({
  Username: {
    type: String,
    required: true,
    unique: true
  },

  Password: {
    type: String,
    required: true,
  },
}, { timestamps: true });
mongoose.models = {}
const Admin = mongoose.model('Admins', Adminschema);
<<<<<<< HEAD
<<<<<<< HEAD
module.exports = Admin;
=======
module.exports = Admin;
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
=======
module.exports = Admin;
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
