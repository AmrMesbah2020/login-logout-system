const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
var express = require("express");
//var router = express.Router();
//const moment = require('moment');
const path = require('path');



const hbs = require('hbs');
const User = require('../models/user.js');

/*const router = require('../routes/modifyAccount');*/
const app = express();


//signup
// Import the User model


async function createUser(userData) {
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      return { success: false, message: 'Email already exists' };
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // Create the new user object
    const newUser = new User({
      name: userData.name,
      surname: userData.surname,
      email: userData.email,
      password: hashedPassword,
      numtel: userData.numtel,
      isitStudent: userData.isitStudent,
      departement: userData.departement,
      grade: userData.grade,
      specialite: userData.specialite
    });

    // Save the new user to the database
    await newUser.save();

    return { success: true, message: 'User created successfully' };
  } catch (err) {
    console.error(err);
    return { success: false, message: 'Server error' };
  }
}






//login
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }); // look up user by email

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password); // compare hashed password

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // user is authenticated
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});





//logout
async function logout(req, res) {
  try {
    // Destroy the session and clear the user data
    req.session = null;
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}


/*
app.post('/logout', (req, res) => {
  // clear the session and redirect to the home page
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
    } else {
      res.redirect('/');
    }
  });
});*/

// @desc     forgot password
// @route    POST
// @access   Public





//modifier compte using the primary identifier(email) to find the user in database
//exports.modifyAccount = asyncHandler(async (req, res, next) => {


  exports.modifyAccount = async (req, res, next) => {
  try {
    const email = req.body.email;
    const newAccountData = req.body.newAccountData;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    for (const field in newAccountData) {
      user[field] = newAccountData[field];
    }

    await user.save();

    return res.status(200).json({ message: 'Account modified successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error modifying account: ' + error.message });
  }
}
module.exports = { login };
module.exports = { createUser };
module.exports = {logout: logout};