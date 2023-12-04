const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");
const Room = require("../models/room");
const moment = require("moment");
router.post("/bookroom", async(req, res) => {
    const {
        room ,
        userid ,
        fromdate ,
        todate ,
        totalamount ,
        totaldays} =req.body

        try {
            const newbooking = new Booking({
                room : room.name,
                roomid : room._id,
                userid ,
                fromdate : moment(fromdate, 'DD-MM-YYYY').format("DD-MM-YYY"),
                todate : moment(todate, 'DD-MM-YYYY').format("DD-MM-YYYY"),
                totalamount,
                totaldays,
                transactionid : '1234'
            })
            const booking = await newbooking.save()
            
            res.send('Booking successful');
            } catch (error) {
                return res.status(400).json({error});

            }
});

module.exports = router;