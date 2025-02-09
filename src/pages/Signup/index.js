import { useContext, useEffect } from "react";
import { MyContext } from "../../App";

const Signup = () => {
  const { setshowheaderfooter } = useContext(MyContext);
  useEffect(() => {
    setshowheaderfooter(false);
    return () => setshowheaderfooter(true);
  }, [setshowheaderfooter]);

  return (
    <>
      <section>
        <div className="signin-container">
          <div className="signin-content">
            <div className="signin-logo"></div>
            <div className="signin-form">
              <h3>Create Account</h3>
              <div className="signup-details">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="fullname"
                />
                <input
                  type="text"
                  placeholder="Contact No"
                  className="fullname"
                />
                
              </div>
              <div className="signup-email-input">
                <input type="email" placeholder="Email" className="em-i" />
              </div>
              <div className="signup-password-input">
                <input
                  type="password"
                  placeholder="password"
                  className="pas-i"
                />
              </div>
              <div className="sign-button">
                <button className="signin-b">Sign Up</button>
              </div>
              <div className="sign-cancel">
                <button className="signin-cancel">Cancel</button>
              </div>

              <div className="not">
                <p>Already Registered?</p>
                <span>Sign In</span>
              </div>

              <div className="other">
                <h3>Or Continue with other Social Account</h3>
              </div>
              <div className="google-signup"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Signup;
