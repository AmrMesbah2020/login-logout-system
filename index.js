const express = require('express');
const connectDB = require('./db')
//const router = require('./routes');
//const router = require('./routes');
//const modifyAccountRouter = require('./routes/modifyAccount');
const userRoutes = require('./routes/authentification');
const userControler = require('./controllers/userController');
const User = require('./models/user')
const { createUser } = require('./controllers/userController');
//create new express application
const app = express();
//set db connection
connectDB();
const bodyParser = require('body-parser');

app.use(bodyParser.json());



// Mounting user routes on the app
app.use('/api/user', userRoutes);
//body parser


//app.use(express.json());// middleware to parse JSON request body

//dotenv configuration
//require('dotenv').config(); 
/*
app.put('/users/:id', async (req, res) => {
  try {
    await userControler.modifyAccount(req.body.email, req.body.newAccountData);
    res.status(200).json({ message: 'Account modified successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});*/
// 
/*
app.put('/modify-account', (req, res) => {
  const email = req.body.email;
  const newAccountData = req.body.newAccountData;

  userControler.modifyAccount("triratnckck@gmail.com", "0548486525")
    .then(() => {
      res.status(200).json({ message: 'Account modified successfully' });
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error modifying account: ' + error.message });
    });
});*/






app.get('/', (req, res) => {
  res.send('API is running ..')
});
//other routes
//app.use('/modify-account', modifyAccountRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



