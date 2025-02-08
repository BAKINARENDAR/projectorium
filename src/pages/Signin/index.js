import { useContext, useEffect } from "react";
import MyContext from '../../App';



const Signin=()=>{
    const context=useContext(MyContext);
    useEffect(() =>{
        context.setshowheaderfooter(false);
    });
    return(
        <>
    <section>
        
    </section>
        </>
    )
}
export default Signin;