import React from "react";
import { CiPause1 } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import { FaForward } from "react-icons/fa6";
import { FaFastBackward } from "react-icons/fa";
import "../css/wheel.css";

class Wheel extends React.Component {
  render() {
    return (
      <div className="wheel-container" id="wheel-container">
        <div className="wheel" id="wheel">
          <div className="controll" id="menu">
            <div>MENU</div>
          </div>
          <div className="controll" id="forward">
            <FaForward />
          </div>
          <div className="controll" id="play-pause">
            <div>
              <CiPause1 />
              <FaPlay />
            </div>
          </div>
          <div className="controll" id="reverse">
            <FaFastBackward />
          </div>
        </div>
        
        <div className="blank" id="blank"></div>
      </div>
    );
  }
}

export default Wheel;
