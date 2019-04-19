import React from "react";
import Key from "./Key";
import "./App.css";

const App = () => {
  const syllables =                                          ["La0","La♯0","Si0",
  "Do1","Do♯1","Re1","Re♯1","Mi1","Fa1","Fa♯1","Sol1","Sol♯1","La1","La♯1","Si1",
  "Do2","Do♯2","Re2","Re♯2","Mi2","Fa2","Fa♯2","Sol2","Sol♯2","La2","La♯2","Si2",
  "Do3","Do♯3","Re3","Re♯3","Mi3","Fa3","Fa♯3","Sol3","Sol♯3","La3","La♯3","Si3",
  "Do4","Do♯4","Re4","Re♯4","Mi4","Fa4","Fa♯4","Sol4","Sol♯4","La4","La♯4","Si4",
  "Do5","Do♯5","Re5","Re♯5","Mi5","Fa5","Fa♯5","Sol5","Sol♯5","La5","La♯5","Si5",
  "Do6","Do♯6","Re6","Re♯6","Mi6","Fa6","Fa♯6","Sol6","Sol♯6","La6","La♯6","Si6",
  "Do7","Do♯7","Re7","Re♯7","Mi7","Fa7","Fa♯7","Sol7","Sol♯7","La7","La♯7","Si7"];

  const emulatedKeys = {
    q: "Do3", w: "Re3", e: "Mi3", r: "Fa3", t: "Sol3", y: "La3", u: "Si3",
    a: "Do4", s: "Re4", d: "Mi4", f: "Fa4", g: "Sol4", h: "La4", j: "Si4",
    z: "Do5", x: "Re5", c: "Mi5", v: "Fa5", b: "Sol5", n: "La5", m: "Si5",
  }


  const timeouts = [];
  const audio = new Audio();
  const audioR = new Audio();
  const audioL = new Audio();
  audio.volume = 0.2;
  audioR.volume = 0.2;
  audioL.volume = 0.2;
  let time;
  
  document.addEventListener("keypress", function(e) {
    if (emulatedKeys.hasOwnProperty(e.key)) {
      audio.src = `/content/${emulatedKeys[e.key]}.mp3`;
      audio.currentTime = 0;
      audio.play();
      setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
      }, 5500);
    }
  });

  const playSong = (rightHand, leftHand) => {
    clearTimeouts();
    playNotes(rightHand, audioR)
    if (leftHand !== undefined && leftHand.length !== 0) {
      playNotes(leftHand, audioL);
    }
  }

  const playNotes = (notes, sound) => {
    time = 0;
    notes.forEach(note => {
      time += note[1];
      timeouts.push(setTimeout(() => {
        sound.src = `/content/${note[0]}.mp3`;
        sound.play();
      }, time));
    });
  }

  const clearTimeouts = () => {
    for(let i = 0; i < timeouts.length; i++){
      clearTimeout(timeouts[i]);
    }
  }

  const UNOwen = [
    ["Re4", 0],["La4", 500],["Mi4", 500],["La4", 500],["Fa4", 500],["Sol4", 500],["La4", 250],["Sol4", 250],["Do5", 500],["Re5", 500],
    ["La4", 250],["Mi5", 250],["Fa5", 250],["Mi5", 250],["Fa5", 250],["Mi5", 125],["Re5", 125],["Do5", 250],["La4", 250],["Do5", 250],
    ["Sol4", 250],["La4", 250],["Fa4", 250],
    ["Re4", 1000],["La4", 500],["Mi4", 500],["La4", 500],["Fa4", 500],["Sol4", 500],["La4", 250],["Sol4", 250],["Do5", 500],["Re5", 500],
    ["La4", 250],["Mi5", 250],["Fa5", 250],["Mi5", 250],["Fa5", 250],["Mi5", 125],["Re5", 125],["Do5", 250],["Re5", 250]
  ];

  const introR = [
    ["La4", 0],["Fa4", 500],["Sol♯4", 500],["Mi4", 500],["Si4", 500],["Sol♯4", 500],["Sol4", 500],["La♯4", 500],
    ["La4", 500],["Fa4", 500],["Sol♯4", 500],["Mi4", 500],["Si4", 500],["Sol♯4", 500],["Sol4", 500],
    ["La4", 1000],["Fa4", 500],["Sol♯4", 500],["Mi4", 500],["Si4", 500],["Sol♯4", 500],["Sol4", 500],["La♯4", 500],
    ["La4", 500],["Fa4", 500],["Sol♯4", 500],["Mi4", 500],["Si4", 500],["Sol♯4", 500],["Sol4", 500]
  ];
  const introL = [
    ["La3", 0],             ["Sol♯3", 1000],            ["Si3", 1000],              ["La♯3", 1000],
    ["La3", 1000],            ["Sol♯3", 1000],            ["Si3", 1000],              ["La♯3", 1000],
    ["La3", 1000],["La3", 500],["Sol♯3", 500],["Sol♯3", 500],["Si3", 500],["Si3", 500],["La♯3", 500],["La♯3", 500],
    ["La3", 500],["La3", 500],["Sol♯3", 500],["Sol♯3", 500],["Si3", 500],["Si3", 500],["La♯3", 500]
  ];

  return (
    <div className="App">
      {syllables.map((note, index) => (
        <Key syllable={note} key={index} />
      ))}
      <button className="songs" onClick={() => playSong(introR, introL)}>Intro</button>
      <button className="songs" onClick={() => playSong(UNOwen)}>U.N. Owen Was Her</button>
      <button className="stop" onClick={() => clearTimeouts()}>Pause</button>
    </div>
  );
};

export default App;
