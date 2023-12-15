const express = require("express");
const bookingRoute = require('./routes/bookingsRoute');
const cors = require('cors');

const app = express();
app.use(cors());

// Set up Content Security Policy middleware for local development
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'self';");
  next();
});

const dbconfig = require('./db');
app.use(express.json());
const roomsRoute = require('./routes/roomsRoute');
const usersRoute = require('./routes/usersRoute');
app.use(`/api/rooms`, roomsRoute);
app.use('/api/users', usersRoute);
app.use('/api/bookings', bookingRoute);

const port = process.env.PORT || 5001;

app.listen(port, () => console.log('node server started using nodemon'));