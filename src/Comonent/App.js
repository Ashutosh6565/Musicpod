import React from "react";
import Wheel from "./Wheel";
import Display from "./Display";
import song1 from "../static/songs/Post Malone - White Iverson.mp3";
import song2 from "../static/songs/Confetti  Ghost.mp3";
import song3 from "../static/songs/John Denver - Country Roads.mp3";
import song4 from "../static/songs/Khalid - Young Dumb Broke.mp3";
import song5 from "../static/songs/Rick Astley - Never Gonna Give You Up.mp3";

import song1img from "../static/Post Malone - White Iverson.png";
import song2img from "../static/Post Malone - White Iverson.png";
import song3img from "../static/John Denver - Country Roads.jpg";
import song4img from "../static/Post Malone - White Iverson.png";
import song5img from "../static/Post Malone - White Iverson.png";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      active: 0, //active list items
      menuItems: ["Now Playong", "Mussic", "Games", "Settings"],
      musicItem: [song1, song2, song3, song4, song5],
      songImgItemUrl: [song1img,song2img,song3img,song4img,song5img],
      wallpaperItems: []
    };
  }
  render() {
    return (
      <>
        <Display />
        <Wheel />
      </>
    );
  }
}

export default App;
