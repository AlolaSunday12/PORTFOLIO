import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error';
import moment from 'moment';
import StripeCheckout from 'react-stripe-checkout';

function Bookingscreen() {
  const { roomid, fromdate, todate } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [room, setRoom] = useState();
  const [totalamount, setTotalAmount] = useState();
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const totaldays = moment(todate, 'DD-MM-YYYY').diff(moment(fromdate, 'DD-MM-YYYY'), 'days') + 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("/api/rooms/getroombyid", { roomid });
        setData(response.data);
        setRoom(response.data);
        setTotalAmount(response.data.rentPerDay * totaldays);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [roomid, totaldays]);

  const navigate = useNavigate();

  async function bookRoom() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser && currentUser._id) {
      const bookingDetails = {
        room,
        userid: currentUser._id,
        fromdate,
        todate,
        totalamount,
        totaldays
      };

      console.log('Booking Details:', bookingDetails);

      try {
        const result = await axios.post('/api/bookings/bookroom', bookingDetails);
        console.log('Booking Result:', result);

        // Handle the result if needed

        // Show booking success message and redirect to home page
        setBookingSuccess(true);
        setTimeout(() => {
          navigate('/');
        }, 3000); // Redirect after 3 seconds
      } catch (error) {
        console.error('Error while booking:', error);

        // Update the component state to show the error to the user
        setError(error);
      }
    }
  }

  function onToken(token) {
    console.log(token)
  }

  return (
    <div className='m-1'>
      {loading ? (
        <h1><Loader /></h1>
      ) : error ? (
        <Error />
      ) : data ? (
        <div>
          <div className="row justify-content-center mt-5 bs">
            <div className="col-md-5">
              <h1>{data.name}</h1>
              <img src={data.imageUrls[0]} className='bigimg' alt="Room" />
            </div>
            <div className="col-md-5 d-flex justify-content-end">
              <div>
                <h1>BOOKING DETAILS</h1>
                <hr />

                <b>
                  <p>Name: {JSON.parse(localStorage.getItem('currentUser')).name}</p>
                  <p>From Date: {fromdate}</p>
                  <p>To Date: {todate}</p>
                  <p>Max Count: {data.maxCount}</p>
                </b>

                <div>
                  <h1>AMOUNT</h1>
                  <hr />

                  <b>
                    <p>Total Days: {totaldays}</p>
                    <p>Rent Per Day: {data.rentPerDay} </p>
                    <p>Total Amount: {totaldays * data.rentPerDay}</p>
                  </b>
                </div>

                {!bookingSuccess ? (
                  <div>
                    <button className='btn btn-primary' onClick={bookRoom}>Pay Now</button>
                    <StripeCheckout
                    amount={totalamount * 100}
                    token={onToken}
                    currency='#'
                    stripeKey="pk_test_51OJxwmJ3ABvGEruwTv18iXkfmO6mhEpaBVYlcBYs9E3jgSYL6NhoXFzANmiBJcxPAPdVWXWp7Exf4hBWVcHOaJUO00BLh2nGFs"
                    />
                  </div>
                ) : (
                  <div className="alert alert-success mt-3" role="alert">
                    Booking successful!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Bookingscreen;