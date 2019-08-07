const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

const User = new Schema({

    firstName: {
      type: String
    },

    lastName: {
      type: String
    },

    email: {
        type: String
    },
    password: {
        type: String
    },

    streetAddress: {
      type: String
    },

    streetAddressLine2: {
      type: String
    },

    city: {
      type: String
    },

    stateProvince: {
      type: String
    },

    zipCode: {
      type: 0
    }

});

// take the User's password. password is targetted at this.password
User.methods = {
  checkPassword: function (inputPassword) {
  return bcrypt.compareSync(inputPassword, this.password)
},
  hashPassword: plainTextPassword => {

  return bcrypt.hashSync(plainTextPassword, 10)
  }
}

User.pre('save', function (next) {
  if (!this.password) {

    console.log('Models/userModel.js =======NO PASSWORD PROVIDED=======')
    next()
  } else {

    console.log('Models/userModel.js hashPassword in pre save');
    this.password = this.hashPassword(this.password)
    next()
  }
})

module.exports = mongoose.model('User', User);
