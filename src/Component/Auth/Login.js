import "./Auth.css";
import companyLogo from "../../static/companyLogo.png";
import ForgotPassword from "./ForgotPassword";
import LoginForm from "./LoginForm";
import { useState } from "react";
const Login = () => {
  const [openForgot, setOpenForget] = useState(false);
  return (
    <>
      <div className="container" style={{marginTop:'0'}}>
        <div className="login-container">
          <div className="login-grid">
            <div className="login-logo">
              <img className="pw-logo" src={companyLogo} alt="cmpLogo" />
            </div>
          </div>
          {openForgot && <ForgotPassword />}

          <div className="login-grid">
            {!openForgot && <LoginForm setOpenForget={setOpenForget} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
