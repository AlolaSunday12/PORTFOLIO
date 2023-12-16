const express = require("express");
const bookingRoute = require('./routes/bookingsRoute');
const cors = require('cors');

const app = express();
app.use(cors());

// Set up Content Security Policy middleware for local development
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', `
    default-src * data: mediastream: blob: filesystem: about: ws: wss: 'unsafe-eval' 'wasm-unsafe-eval' 'unsafe-inline'; 
    script-src * data: blob: 'unsafe-inline' 'unsafe-eval'; 
    connect-src * data: blob: 'unsafe-inline'; 
    img-src * data: blob: 'unsafe-inline' https://fonts.googleapis.com; 
    frame-src * data: blob: ; 
    style-src * data: blob: 'unsafe-inline' https://fonts.googleapis.com;
    font-src * data: blob: 'unsafe-inline' https://fonts.googleapis.com;
    frame-ancestors * data: blob: 'unsafe-inline';
  `.replace(/\n/g, '').replace(/\s{2,}/g, ' ')); // Remove newlines and extra spaces

  // Additional headers for security
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'deny');
  res.setHeader('Referrer-Policy', 'no-referrer');

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