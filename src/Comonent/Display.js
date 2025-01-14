import react from "react";
import Navbar from "./Navbar";
import Lockscreen from "./Lockscreen";
import '../css/Display.css';
class Display extends react.Component {
  render() {
    return (
      <div className="display">
        <Navbar />
        <Lockscreen />
      </div>
    );
  }
}

export default Display;
