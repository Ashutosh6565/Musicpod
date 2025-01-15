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

import wallpaper1 from "../static/wallpaper1.jpg";
import wallpaper2 from "../static/wallpaper2.jpg";
import wallpaper3 from "../static/wallpaper3.jpg";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      active: 0, //active list items
      menuItems: ["Now Playong", "Mussic", "Games", "Settings"],
      musicItem: [song1, song2, song3, song4, song5],
      songImgItemUrl: [song1img, song2img, song3img, song4img, song5img],
      wallpaperItems: [wallpaper1, wallpaper2, wallpaper3],
      songItems: [
        "Post Malone - White Iverson",
        "Confetti  Ghost",
        "John Denver - Country Roads",
        "Khalid - Young Dumb Broke",
        "Rick Astley - Never Gonna Give You Up",
      ],
      songIndex: 0, //current
      lengthMenuKey: { "-1": 3, 1: 2, 4: 4, 8: 4, 3: 2, 9: 3, 10: 2 }, //llength of a particular menu
      menuMapping: { "-1": [0, 1, 2, 3], 1: [4, 5, 6], 3: [8, 9, 10] }, //which menu can be rendered by key menu
      currentmenu: -2,
      navigationStack: [], //used for navigation forward and backward
      songUrl: song1, //current song url
      playing: false,
      theme: "rgb(210,210,210)",
      audio: new Audio(song1),
      songImgUrl: song1img,
      wheelColor: "white",
      wallpaper: 0,
      noty: false,
      notifyText: "Wallpaper Changed",
    };
  }

  //function for on long press of forword button tracks are seeked forward
  seekSongForward(e) {
    if (this.state.currentmenu === -2) {
      return;
    }
    if (this.state.playing == false) {
      return;
    }
    if (e.detail.interval < 250) {
      this.state.audio.pause();
      let songIndex = this.state.songIndex;
      if (songIndex === this.state.songImgUrl.length - 1) {
        songIndex = 0;
      } else {
        songIndex++;
      }

      const songUrl = this.state.musicItem[songIndex];
      const songImagUrl = this.state.songImgItemUrl[songIndex];
      this.setState(
        {
          songIndex: songIndex,
          songImagUrl: songImagUrl,
          songUrl: songUrl,
          audio: new Audio(songUrl),
        },
        () => {
          this.state.audio.play();
        }
      );
    }else if(e.detail.interval>250 && e.detail.interval<10000){
      const interval = e.detail.interval/100;
      this.setState((prevState) => {
        prevState.audio.currentTime += interval;
        return prevState
      })
    }

    //for reverse 
    seekSongReverse(e) {
      if (this.state.currentmenu === -2) {
        return;
      }
      if (this.state.playing == false) {
        return;
      }
      if (e.detail.interval < 250) {
        this.state.audio.pause();
        let songIndex = this.state.songIndex;
        if (songIndex === 0) {
          songIndex = this.state.songImgItemUrl.length-1;
        } else {
          songIndex--;
        }
  
        const songUrl = this.state.musicItem[songIndex];
        const songImagUrl = this.state.songImgItemUrl[songIndex];
        this.setState(
          {
            songIndex: songIndex,
            songImagUrl: songImagUrl,
            songUrl: songUrl,
            audio: new Audio(songUrl),
          },
          () => {
            this.state.audio.play();
          }
        );
      }else if(e.detail.interval>250 && e.detail.interval<10000){
        const interval = e.detail.interval/100;
        this.setState((prevState) => {
          prevState.audio.currentTime -= interval;
          return prevState
        })
      }

  }

  //toggle song play and puse
togglePlayPause = () =>{
  if(this.state.currentmenu === -2){return}
  if(this.state.playing === true){
    this.setState({playing:false});
    this.state.audio.pause();
  }
  if(this.state.playing===false){
    this.setState({playing:true});
    this.state.audio.play();
  }
}
//function for : udate active menu while rotating on the track -wheel
  updateActiveMenu = (direction,menu) => {
    if(menu !== -1 && menu !== 1 && menu !== 4 && menu !== 8 && menu !== 9 && menu !== 10){
      return;
    }
    let min = 0;
    let max = 0;
    max = this.state.lengthMenuKey[menu];
    if(direction === 1){
      if(this.state.active >= max){
        this.setState({active:min})
      }else{
        this.setState({active:this.state.active+1})
      }
    }else{
      if(this.state.active <= min){
        this.setState({active:max});
      }else{
        this.setState({active:this.state.active-1})
      }
    }
  }

    //fuction for updating the theme of th code 

    setTheme =(id) => {
      let theme = ""
      if(id == 0){
        theme = " #f0f0f0"
      }else if(id === 1){
        theme = "#555d50"
      }else if(id === 2){
        theme = "#D1CDDA";
      }else if (id === 3){
        theme = "#c4aeead";
      }
      this.setState({theme:theme,noty:true,notifyText:"Theme changed"}) /// for the notifiction
      return;
    }
    //function for the wallpaper

    setWallpaper = (id) => {
      this.setState({wallpaper:id,noty:true,notifyText:"Wallpaper changed"});
      return;
    }


    setWheelColor = (id) => {
      let wheelColor = ""
      if(id === 0){
        wheelColor = "#212121"
      }else if(id === 1){
        wheelColor = "White"
      }else if(id === 2){
        wheelColor = "#3E2723"
      }else if(id === 3){
        wheelColor = "#3D5AFE"
      }
      this.setState({wheelColor : wheelColor, noty:true,notifyText: "Wheele color is changed"})
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
