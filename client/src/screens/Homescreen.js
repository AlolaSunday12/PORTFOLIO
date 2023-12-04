import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Room from '../components/Room';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { DatePicker, Space } from 'antd';
import moment from 'moment'
const { RangePicker } = DatePicker;

function Homescreen() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const[fromdate , setfromdate] = useState(null);
  const[todate , settodate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Replace the API call with the provided data
        const data = [
          {
            "currentbookings": [],
            "_id": "655dcf2feb6ed37df540610f",
            "name": "ikeja lounge",
            "imageUrls": [
              "https://images.rosewoodhotels.com/is/image/rwhg/hi-hgv-26330925-rhgmodelbedroom-1",
              "https://th.bing.com/th/id/OIP.N2fTQ4ZIqhHL_lxhgMlMLwHaE7?w=291&h=194&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            ],
            "rentPerDay": 1500,
            "type": "single",
            "maxCount": 2,
            "phoneNumber": "9086574546",
            "currentBookings": [],
            "description": "paradise hotel is a well-furnished lodge located at ikeja GRA"
          },
          {
            "currentbookings": [],
            "_id": "655dcf2feb6ed37df5406111",
            "name": "soft landing",
            "imageUrls": [
              "https://th.bing.com/th/id/OIP.xtzdZLRAuS5Y0fAGf4UaiAHaF2?w=227&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
              "https://th.bing.com/th/id/OIP.VSsMsJOOMYMYoW9LaF7h3AHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            ],
            "rentPerDay": 5000,
            "type": "luxurious",
            "maxCount": 2,
            "phoneNumber": "945364758",
            "currentBookings": [],
            "description": "experience luxurious life with soft landing hotel"
          },
          {
            "currentbookings": [],
            "_id": "655dcf2feb6ed37df5406110",
            "name": "stay safe hotel",
            "imageUrls": [
              "https://th.bing.com/th/id/OIP.DVvAgoVACPyAP4Ix3phhjQHaFc?w=230&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
              "https://th.bing.com/th/id/OIP.kSTLhOVRvKCFbRItQrjHywHaFW?w=293&h=204&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            ],
            "rentPerDay": 2000,
            "type": "double",
            "maxCount": 2,
            "phoneNumber": "925167489",
            "currentBookings": [],
            "description": "stay safe hotel is well furnished for your comfortability"
          }
        ];
        setRooms(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  function filterByDate(dates) {
    setfromdate(moment(new Date(dates[0])).format('DD-MM-YYYY'));
    settodate(moment(new Date(dates[1])).format('DD-MM-YYYY'));

  };

  return (
    <div className='container'>

      <div className="row mt-5">

        <div className="col-md-3 input">

        <RangePicker format='DD-MM-YYYY' onChange={filterByDate}/>

        </div>

      </div>
      <div className="row justify-content-center mt-5">
        {loading ? (
          <h1><Loader/></h1>
          ) : rooms.length>1 ? (
            rooms.map((room) => (
              <div className="col-md-9 mt-2" key={room._id}>
                <Room room={room} fromdate={fromdate} todate={todate}/>
              </div>
               ))
          ) : (
           <Error/>
          )}
        </div>
      </div>
    );
  }
  
  export default Homescreen;