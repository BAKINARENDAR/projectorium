
import { useContext, useEffect } from "react";
import { MyContext } from "../../App";

const Signin=()=>{
    const { setshowheaderfooter } = useContext(MyContext );
    useEffect(() => {
        setshowheaderfooter(false); 
        return () => setshowheaderfooter(true); 
      }, [setshowheaderfooter]);
   
    return(
        <>
    <section>
    <div className="signin-container">
          <div className="signin-content">
            <div className="signin-logo"></div>
            <div className="signin-form">
              <h3>Sign In</h3>
              <div className="email-input"> 
              <input
                type="email"
                placeholder="Email"
               className="em-i"
              />
              </div>
              <div className="password-input">
               <input
                type="password"
                placeholder="password"
               className="pas-i"
              />
              </div>
              <div className="forgot-pas">
                <p>Forgot password?</p>
              </div>
              <div className="sign-button">
                <button className="signin-b">Sign In</button>
              </div>
              <div className="sign-cancel">
               
                <button className="signin-cancel">Cancel</button>
             
              </div>
              
              <div className="not">
                <p>Not Registered?</p>
                <span>Sign Up</span>
              </div>
             
              <div className="other">
                <h3>Or Continue with other Social Account</h3>
              </div>
              <div className="google-sign"></div>
            </div>
          </div>
        </div>
    </section>
        </>
    )
}
export default Signin;