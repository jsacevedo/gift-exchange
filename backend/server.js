const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const colors = require('colors');
require('dotenv').config({ path: '../.env' });

const { notFound, errorHandler } = require('./middleware/errorMiddleware');

// Setup Express Server
const app = express();
const port = process.env.PORT || 5000;

// Express Middleware
app.use(cors());
app.use(express.json());

// Setup Connection to MongoDB
const uri = process.env.MONGODB_URI;
const connectDb = async () => {
  try {
    const dbConnection = await mongoose.connect(uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(
      `MongoDB Connected: ${dbConnection.connection.host}`.green.underline
    );
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
  }
};

connectDb();

app.get('/', function (req, res) {
  res.send('API is running...');
});

// Express Routes
// const partiesRouter = require('./routes/parties');
const usersRouter = require('./routes/users');

// app.use('/parties', partiesRouter);
app.use('/users', usersRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
