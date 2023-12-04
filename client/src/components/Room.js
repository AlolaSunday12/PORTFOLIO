import React , {useState} from 'react';
import {Modal , Button , Carousel} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Room({ room , fromdate , todate}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="row bs">
      <div className="col-md-4">
        {/* Displaying the first image, you can modify this based on your layout */}
        <img src={room.imageUrls[0]} alt={room.name} style={{ width: '100%' }} />
      </div>
      <div className="col-md-8">
        <h2>{room.name}</h2>
        <b><p>{room.description}</p>
        <p>Rent per Day: ${room.rentPerDay}</p>
        <p>Type: {room.type}</p>
        <p>Max Count: {room.maxCount}</p>
        <p>Phone Number: {room.phoneNumber}</p></b>
        {/* Add more room details as needed */}
        <div style={{float: 'right'}}>
          {(fromdate && todate) && (
            <Link to={`/book/${room._id}/${fromdate}/${todate}`}>
            <button className='btn btn-primary m-2'>Book Now</button>
            </Link>
          )}
            <button className='btn btn-primary' onClick={handleShow}>View Details</button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
  {room.imageUrls.map(url=>{
    return <Carousel.Item>
    <img
      className="d-block w-100 bigimg"
      src={url}
    />
  </Carousel.Item>
  })}
</Carousel>
<p>{room.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Room;