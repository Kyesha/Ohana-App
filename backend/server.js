const express = require('express');
const app = express();
const PORT = 4000;
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('./Passport');
const dbConnection = require('./Databases');
const MongoStore = require('connect-mongo')(session);

// Originally had user = require
const userRoute = require('./Routes/userRoute');


app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})

// Middleware
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)

// this translates the requested code into json
app.use(bodyParser.json())

// THIS IS WHERE IT'S BREAKING
// THIS IS MIDDLEWARE TO DISTINCT BETWEEN BACKEND AND FRONTEND ROUTES TO NOT GET CONFUSED
// Old VERSION
// app.use('/users', userRoutes);
app.use('/userRoute', userRoute)


//This keeps track of user sessions???? If someone signs up, we get to keep track of their session (backend)
app.use(
session({
  secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
  store: new MongoStore({ mongooseConnection: dbConnection }),
  resave: false, //required. This will not resave to the session store unless the session is modified. Modified means adding a property to req.session or changing a variable value.
  saveUninitialized: false //required. This session is an unmodified one. When set to false, the session won’t be saved unless we modify it. It also won’t send the id back to the browser.
})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser
