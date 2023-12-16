const express = require("express");
const bookingRoute = require('./routes/bookingsRoute');
const cors = require('cors');

const app = express();
app.use(cors());

// Set up Content Security Policy middleware for local development
res.setHeader('Content-Security-Policy', `
  default-src 'self' https://fonts.googleapis.com; 
  script-src 'self' https://fonts.googleapis.com 'unsafe-inline' 'unsafe-eval'; 
  connect-src 'self'; 
  img-src 'self' https://fonts.googleapis.com; 
  frame-src 'self'; 
  style-src 'self' https://fonts.googleapis.com 'unsafe-inline';
  font-src 'self' https://fonts.googleapis.com 'unsafe-inline';
  frame-ancestors 'self';
`.replace(/\n/g, '').replace(/\s{2,}/g, ' '));

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