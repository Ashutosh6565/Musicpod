import react from "react";
import Navbar from "./Navbar";
import '../css/Lockscreen.css'
class Lockscreen extends react.Component{
render(){
    return(
        <>
        <div className="bottom-div-lock">
            <h3>Press center button to unlock</h3>
        </div>
        </>
    )
}
}
export default Lockscreen;