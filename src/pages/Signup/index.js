import { useContext, useEffect } from "react";
import MyContext from '../../App';

const Signup=()=>{
    const context = useContext(MyContext);

    useEffect(() => {
      context.setshowheaderfooter(false);
    });
    
    return(
        <>
        Signup page
        </>
    )
}
export default Signup;