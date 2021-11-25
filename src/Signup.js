import  React from 'react';
import './Signup.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {FcGoogle }from 'react-icons/fc';
import {FaFacebook} from 'react-icons/fa';
import { Button } from '@mui/material';

  function Signup() {
  return (
      <div className="layout">
          <div className="inside-layout">
              <div className="col-signup">
              <div className="sign-up-layout">
              <h1>Sign Up</h1>
              <h5>Sign Up With</h5>
            <button onClick="" className="signup-fields"> <FcGoogle size="20px" /> Sign up with google</button>
            <button onClick="" className="signup-fields"><FaFacebook color="blue" size="20px"/>Sign up with facebook</button>
          </div>
          <div>

              <input type="text"className="input-field"/>

              <input type="email" className="input-field"/>
          </div>
          <div>
              <input type="password" className="input-pswd-field" />
          </div>
             <div >
             <FormControlLabel control={<Checkbox defaultChecked />} label="i've read agree with Terms of Services and our privacy Policy" />
             </div>
             <div> 
            < Button variant="contained" href="#contained-buttons" id="btn">&#8594;</Button>
             </div>
          </div>
              </div>
          
         
              
      </div>
  );
}
export default Signup;
