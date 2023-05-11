const LoginForm = (props) => {
    return ( <>
    <div class="my-form">
            <form action="">
              <div class="single-input">
                <span>
                  <i class="fas fa-user"></i>
                </span>
                <input type="text" placeholder="Username" />
              </div>
              <div class="single-input">
                <span>
                  <i class="fas fa-unlock"></i>
                </span>
                <input type="password" placeholder="Password" />
              </div>
              <div className="forgot-pass" >
                <span onClick={()=>{props.setOpenForget(true)}}>Forgot Password ?</span>
              </div>

              <button className="button-login">Login</button>
            </form>
          </div> </> );
}
 
export default LoginForm;