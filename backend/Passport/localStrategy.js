const User = require('../Databases/Models/userModel')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
	{
		emailField: 'email' // not necessary, DEFAULT
	},
	function(email, password, done) {
		User.findOne({ email: email }, (err, userRoute) => {
			if (err) {
				return done(err)
			}
			if (!userRoute) {
				return done(null, false, { message: 'Incorrect email' })
			}
			if (!userRoute.checkPassword(password)) {
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, userRoute)
		})
	}
)

module.exports = strategy
