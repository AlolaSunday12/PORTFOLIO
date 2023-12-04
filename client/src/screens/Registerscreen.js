import React , {useState , useEffect} from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Success from '../components/Success';

function Registerscreen() {
    const[name , setname] = useState('')
    const[email , setemail]= useState('')
    const[password , setpassword] = useState('')
    const[confirmpassword , setconfirmpassword] = useState('')
    const[error , seterror] = useState('')
    const[loading , setloading] = useState(false)
    const [success, setsuccess] = useState(false);

    async function register() {
       if(password===confirmpassword)
       {
        const user = {
            name,
            email,
            password,
            confirmpassword
        };
        try {
            setloading(true);
            const response = await axios.post('/api/users/register', user);
            const result = response.data;
            console.log(result);
            setloading(false);
            // Clear form inputs on successful registration
            setname('');
            setemail('');
            setpassword('');
            setconfirmpassword('');
            // Provide feedback to the user
            setsuccess(true);
            seterror('');
          } catch (error) {
            console.error(error);
            // Handle error responses from the server
            seterror('Registration failed. Please try again.');
            setloading(false);
            setsuccess(false);
          }
        } else {
          seterror('Incorrect password.');
          setsuccess(false);
        }
      }

    return (
        <div>

            {loading && (<Loader/>)}
            
           <div className="row justify-content-center mt-5">
            <div className="col-md-5">

                <div className="bs">
                    <h2>Register</h2>
                    <hr />

                    <input type="text" className="form-control"placeholder="name" 
                    value={name} onChange={(e)=>{setname(e.target.value)}}/>
                    <input type="text" className="form-control"placeholder="email" 
                    value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                    <input type="password" className="form-control"placeholder="password" 
                    value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                    <input type="password" className="form-control"placeholder="confirmpassword" 
                    value={confirmpassword} onChange={(e)=>{setconfirmpassword(e.target.value)}}/>
                    
                    {error && <p className="text-danger">{error}</p>}
                    {success && <p className="text-success">Registration successful!</p>}

                    <button className='btn btn-primary mt-2' onClick={register}>Register</button>
                </div>

            </div>

           </div>
        </div>
    );
}

export default Registerscreen;