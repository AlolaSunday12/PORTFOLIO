const express = require("express");
const bookingRoute = require('./routes/bookingsRoute');

const app = express();

// Set up Content Security Policy middleware for local development
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', `
    default-src 'self';
    script-src 'self' http://localhost:3000;  // Adjust the port if needed
    style-src 'self' http://localhost:3000;   // Adjust the port if needed
    font-src 'self' data: https://cdnjs.cloudflare.com;
    img-src 'self' data: http://localhost:3000;
    manifest-src 'self';
  `);

  // Additional headers for security
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'deny');
  res.setHeader('Referrer-Policy', 'no-referrer');

  next();
});

const dbconfig = require('./db')
app.use(express.json());
const roomsRoute = require('./routes/roomsRoute')
const usersRoute = require('./routes/usersRoute')
const bookingsRoute = require('./routes/bookingsRoute')
app.use(`/api/rooms`, roomsRoute)
app.use('/api/users', usersRoute)
app.use('/api/bookings', bookingRoute)

const port = process.env.PORT || 5001;

app.listen(port, () => console.log('node server started using nodemon'));
 require("express");
const bookingRoute = require('./routes/bookingsRoute');

const app = express();

// Set up Content Security Policy middleware for local development
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', `
    default-src 'self';
    script-src 'self' http://localhost:3000;  // Adjust the port if needed
    style-src 'self' http://localhost:3000;   // Adjust the port if needed
    font-src 'self' data: https://cdnjs.cloudflare.com;
    img-src 'self' data: http://localhost:3000;
    manifest-src 'self';
  `);

  // Additional headers for security
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'deny');
  res.setHeader('Referrer-Policy', 'no-referrer');

  next();
});

const dbconfig = require('./db')
app.use(express.json());
const roomsRoute = require('./routes/roomsRoute')
const usersRoute = require('./routes/usersRoute')
const bookingsRoute = require('./routes/bookingsRoute')
app.use(`/api/rooms`, roomsRoute)
app.use('/api/users', usersRoute)
app.use('/api/bookings', bookingRoute)

const port = process.env.PORT || 5001;

app.listen(port, () => console.log('node server started using nodemon'));