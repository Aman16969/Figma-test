import './Auth.css'
const ResetConfirmation = () => {
    return ( <>
    <div>
    <div className="forgot-form" style={{height:'300px'}}>
    <div class="form-title" style={{textAlign:'center'}}>
        <p>Please check below E-mail account linked with your username . </p>
            <p>We have sent an E-mail to reset your Password .</p>
          </div>
          <div class="form-title" style={{textAlign:'center'}}>
            <h3>ranjan.am********@l.com</h3>
          </div>
          
          <div class="form-title">
            <p>not recieved?</p>
          </div>
          <button className="button-login">Resend</button>
        </div>
    </div>
    </> );
}
 
export default ResetConfirmation;