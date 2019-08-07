const passport = require('passport')
const LocalStrategy = require('./localStrategy')
const User = require('../Databases/Models/userModel')

// this is to give an ID to each new user being added
// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((userRoute, done) => {
	console.log('*** serializeUser called, userRoute: ')
	console.log(userRoute) // the whole raw user object
	console.log('---------')
	done(null, { _id: userRoute._id })
})

// user object attaches to the request as req.user
passport.deserializeUser((id, done) => {
	console.log('DeserializeUser called')
	User.findOne(
		{ _id: id },

		'email',
		(err, userRoute) => {
			console.log('*** Deserialize userRoute, userRoute:')
			console.log(userRoute)
			console.log('--------------')
			done(null, userRoute)
		}
	)
})

//  Use Strategies
passport.use(LocalStrategy)

module.exports = passport
