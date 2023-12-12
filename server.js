const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

// Middleware to set Content Security Policy header
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'none'; font-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval';"
  );
  next();
});

// Other Middleware
app.use(express.json());

// Routes
const roomsRoute = require('./routes/roomsRoute');
const usersRoute = require('./routes/usersRoute');
const bookingRoute = require('./routes/bookingsRoute');
app.use('/api/rooms', roomsRoute);
app.use('/api/users', usersRoute);
app.use('/api/bookings', bookingRoute);

// Root route
app.get('/', (req, res) => {
  res.send('Hello, this is the root route!');
});

// Start the server
app.listen(port, () => {
  console.log(`Node server started on port ${port} using nodemon`);
});