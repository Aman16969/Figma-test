import { useState } from "react";
import "./Auth.css";
import ResetConfirmation from "./ResetConfirmation";
const ForgotPassword = () => {
  const[flag,setFlag]=useState(false);
  return (
    <>
      <div className="forgot-container">
        <div className="forgot-title">
          <h2>
            <span style={{ marginRight: "30px", fontSize: "30px" }}>
              <i class="fas fa-lock"></i>
            </span>
            Password Recovery
          </h2>
        </div>
        {flag && <ResetConfirmation/>}
        {!flag &&<div className="forgot-form">
          <div class="form-title">
            <h3>Enter Your Username</h3>
          </div>
          <div class="single-input">
            <span style={{fontSize:'25px'}}>
            <i class="fas fa-user-alt"></i>
            </span>
            <input type="text" required />
          </div>
          <button className="button-login" onClick={()=>{setFlag(true)}}>Next</button>
        </div> }
      </div>
    </>
  );
};

export default ForgotPassword;
