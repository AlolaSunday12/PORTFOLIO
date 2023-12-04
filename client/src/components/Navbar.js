import React from 'react'

function Navbar() {
  const storedUser = localStorage.getItem( 'currentUser' );
  let user;

  console.log( 'Stored User:', storedUser );

  try {
    user = storedUser ? JSON.parse( storedUser ) : null;
  } catch ( error ) {
    console.error( 'Error parsing user from localStorage:', error );
    user = null;
  }
  function logout() {
    localStorage.removeItem('currentUser')
    window.location.href='/login'
  }

  return (
    <div>
        <nav class="navbar navbar-expand-lg">
<a class="navbar-brand" href="/Hotel Reservation system">
Hotel Reservation system
</a>
<button class="navbar-toggler" 
type="button" 
data-toggle="collapse" 
data-target="#navbarNav" 
aria-controls="navbarNav" 
aria-expanded="false" 
aria-label="Toggle navigation">
<span class="navbar-toggler-icon" ><i class="fa fa-bars" style={{color: 'white'}}></i></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
<ul class="navbar-nav">
  {user ? (
    <>
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" 
  type="button" 
  id="dropdownMenuButton1" 
  data-bs-toggle="dropdown" 
  aria-expanded="false">
   <i class="fa fa-address-book"></i> {user.name}
  </button>
  <ul class="dropdown-menu" 
  aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">
      Bookings
      </a>
      </li>
    <li><a class="dropdown-item" href="#" onClick={logout}>
      Logout
      </a>
      </li>
  </ul>
</div>
    </>
  ) : (
    <>
    <li class="nav-item active">
    <a class="nav-link" href="/Register">
        Register
        </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/Login">
        Login
        </a>
  </li>
  </>
  )}

</ul>
</div>
</nav>
    </div>
)
}

export default Navbar