const express = require('express')
const router = express.Router()
const User = require('../Databases/Models/userModel')
const passport = require('../Passport')

// I DONT NEED BODY PARSER BECAYSE SERVER.JS HAS IT FIRST
// CREATES A NEW USER
router.post('/', (req, res) => {
    console.log('here is my request');
    console.log(req.body);

    const { firstName, lastName, email, password, streetAddress, streetAddressLine2, city, stateProvince, zipCode } = req.body
    // ADD VALIDATION
    // User.getALL
    User.findOne({ email: email }, (err, userRoute) => {
        if (err) {
            console.log('userRoute.js post error: ', err)
        } else if (userRoute) {
            res.json({
                error: `Sorry, already a user with that email: ${email}`
            })
        }
        else {
            const newUser = new User({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                streetAddress: streetAddress,
                streetAddressLine2: streetAddressLine2,
                city: city,
                stateProvince: stateProvince,
                zipCode: zipCode,

            })
            console.log('this is working');
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

// GETS ALL USERS FROM THE DATABASE
router.get('/', (req, res, next) => {
    console.log('===== user!!======');
    if (req.userRoute) {
        res.json({ userRoute: req.userRoute })
    } else {
        res.json({ userRoute: null })
    }
})

// LOGS IN ONE USER FROM THE DATABASE
router.post('/logIn', function (req, res, next) {
        console.log('Routes/userRoute.js, logIn, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('loggedIn', req.userRoute);
        let userRouteInfo = {
            email: req.userRoute.email
        };
        res.json(userRouteInfo);
    })

// LOGS OUT ONE USER FROM THE DATABASE
router.post('/logOut', (req, res) => {
    if (req.userRoute) {
        req.logout()
        res.send({ msg: 'logging Out' })
    } else {
        res.send({ msg: 'no user to log Out' })
    }
  })


// GETS ONE USER FROM THE DATABASE
router.get('/:id', function (req, res) {
    User.findById(req.params._id, function (err, userRoute) {
        if (err) return res.status(500).send('Couldnt find userRoute.');
        if (!userRoute) return res.status(404).send('No userRoute found.');
        res.status(200).send(userRoute);
    })
  })

// DELETES ONE USERFROM THE DATABASE
router.delete('/:id', function (req, res) {
    User.findByIdAndRemove(req.params._id, function (err, userRoute) {
        if (err) return res.status(500).send('Couldnt delete a userRoute.');
        res.status(200).send('User: '+ userRoute.email +' was deleted.');
    })
  })

// UPDATES ONE USER IN THE DATABASE
router.put('/:id', function (req, res) {
    User.findByIdAndUpdate(req.params._id, req.body, {new: true}, function (err, userRoute) {
        if (err) return res.status(500).send('Couldnt update a userRoute.');
        res.status(200).send(userRoute);
    })
  })



module.exports = router

// router.get('/:id', (req, res, next) => {
//     const { id } = req.params;
//     if (!id) {
//       return next();
//     }
//     User.findById(id, (error, userRoute) => {
//       if (error) {
//         console.log(error);
//       } else {
//         response.json(userRoute);
//       }
//     });
//   });
