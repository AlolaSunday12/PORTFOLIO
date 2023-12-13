const express = require("express");
const helmet = require("helmet");
const bookingRoute = require('./routes/bookingsRoute');
const dbconfig = require('./db');

const app = express();

// Use helmet middleware for security headers, including CSP
app.use(helmet());

// Set up Content Security Policy (CSP) to allow fonts
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'"],
    styleSrc: ["'self'"],
    fontSrc: ["'self'", 'https://fonts.gstatic.com'], // Add the font source URL(s)
  },
}));

// Other middleware and route setup
app.use(express.json());
const roomsRoute = require('./routes/roomsRoute');
const usersRoute = require('./routes/usersRoute');
const bookingsRoute = require('./routes/bookingsRoute');
app.use('/api/rooms', roomsRoute);
app.use('/api/users', usersRoute);
app.use('/api/bookings', bookingRoute);

const port = process.env.PORT || 5001;

app.listen(port, () => console.log('Node server started using nodemon'));