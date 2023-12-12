const express = require("express");
const bookingRoute = require('./routes/bookingsRoute');

const app = express();

const dbconfig = require('./db')
app.use(express.json());
const roomsRoute = require('./routes/roomsRoute')
const usersRoute = require('./routes/usersRoute')
const bookingsRoute = require('./routes/bookingsRoute')

app.use(`/api/rooms` , roomsRoute)
app.use('/api/users' , usersRoute)
app.use('/api/bookings' , bookingRoute)
const port = process.env.PORT || 5001;

app.listen(port, () => console.log('node server started using nodemon'));