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
  let time;
  
  document.addEventListener("keypress", function(e) {
    if (emulatedKeys.hasOwnProperty(e.key)) {
      const audio = new Audio();
      audio.volume = 0.2;
      audio.src = `/content/${emulatedKeys[e.key]}.mp3`;
      audio.play();
      setTimeout(() => {
        audio.pause();
      }, 5500);
    }
  });

  const playSong = (rightHand, leftHand) => {
    clearTimeouts();
    if (rightHand !== undefined && rightHand.length !== 0) {
      playNotes(rightHand, "lightseagreen");
    }
    if (leftHand !== undefined && leftHand.length !== 0) {
      playNotes(leftHand, "crimson");
    }
  }

  const playNotes = (notes, color) => {
    time = 0;
    notes.forEach(note => {
      time += note[1];
      timeouts.push(setTimeout(() => {
        document.querySelectorAll('.note').forEach(n => {
          if(n.firstElementChild.textContent == note[0]) {
            n.style.backgroundImage = `linear-gradient(transparent, ${color})`;
            setTimeout(() => {
              n.style.backgroundImage = "none";
            }, 250);
          }
        });
        let sound = new Audio();
        sound.volume = 0.2;
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

  const sample = [
    ["Re4", 250],["La4", 500],["Mi4", 500],["La4", 500],["Fa4", 500],["Sol4", 500],["La4", 250],["Sol4", 250],["Do5", 500],["Re5", 500],
    ["La4", 250],["Mi5", 250],["Fa5", 250],["Mi5", 250],["Fa5", 250],["Mi5", 125],["Re5", 125],["Do5", 250],["La4", 250],["Do5", 250],
    ["Sol4", 250],["La4", 250],["Fa4", 250],
    ["Re4", 1000],["La4", 500],["Mi4", 500],["La4", 500],["Fa4", 500],["Sol4", 500],["La4", 250],["Sol4", 250],["Do5", 500],["Re5", 500],
    ["La4", 250],["Mi5", 250],["Fa5", 250],["Mi5", 250],["Fa5", 250],["Mi5", 125],["Re5", 125],["Do5", 250],["Re5", 250]
  ];

  const introR = [
    ["La4", 250],["Fa4", 500],["Sol♯4", 500],["Mi4", 500],["Si4", 500],["Sol♯4", 500],["Sol4", 500],["La♯4", 500],
    ["La4", 500],["Fa4", 500],["Sol♯4", 500],["Mi4", 500],["Si4", 500],["Sol♯4", 500],["Sol4", 500],
    ["La4", 1000],["Fa4", 500],["Sol♯4", 500],["Mi4", 500],["Si4", 500],["Sol♯4", 500],["Sol4", 500],["La♯4", 500],
    ["La4", 500],["Fa4", 500],["Sol♯4", 500],["Mi4", 500],["Si4", 500],["Sol♯4", 500],["Sol4", 500]
  ];
  const introL = [
    ["La3", 250],             ["Sol♯3", 1000],            ["Si3", 1000],              ["La♯3", 1000],
    ["La3", 1000],            ["Sol♯3", 1000],            ["Si3", 1000],              ["La♯3", 1000],
    ["La3", 1000],["La3", 500],["Sol♯3", 500],["Sol♯3", 500],["Si3", 500],["Si3", 500],["La♯3", 500],["La♯3", 500],
    ["La3", 500],["La3", 500],["Sol♯3", 500],["Sol♯3", 500],["Si3", 500],["Si3", 500],["La♯3", 500]
  ];

  const furR = [
    ['Mi5', 250],['Re♯5',175],['Mi5',175],['Re♯5',175],['Mi5',175],['Si4',175],['Re5',175],['Do5',175],['La4',175],
    ['Do4',525],['Mi4',175],['La4',175],['Si4',175],['Mi4',525],['La4',175],['Si4',175],['Do5',175],
    ['Mi5', 1000],['Re♯5',175],['Mi5',175],['Re♯5',175],['Mi5',175],['Si4',175],['Re5',175],['Do5',175],['La4',175],
    ['Do4',525],['Mi4',175],['La4',175],['Si4',175],['Mi4',525],['Do5',175],['Si4',175],['La4',175]
  ];
  const furL = [
    ['La2',1650],['Mi3',175],['La3',175],['Mi2',700],['Mi3',175],['Sol♯3',175],
    ['La2',3125],['Mi3',175],['La3',175],['Mi2',700],['Mi3',175],['Sol♯3',175]
  ];

  const rondoR = [
    ['Si4',250],['La4',150],['Sol♯4',150],['La4',150],['Do5',150],
    ['Re5',500],['Do5',150],['Si4',150],['Do5',150],['Mi5',150],
    ['Fa5',500],['Mi5',150],['Re♯5',150],['Mi5',150],
    ['Si5',150],['La5',150],['Sol♯5',150],['La5',150],['Si5',150],['La5',150],['Sol♯5',150],['La5',150],['Do6',150],
    ['La5',750],['Do6',300],['Sol5',300],['La5',50],['Si5',50],
    ['Fa♯5',300],['La5',0],['Mi5',300],['Sol5',0],['Fa♯5',300],['La5',0],['Sol5',300],['La5',50],['Si5',50],
    ['Fa♯5',300],['La5',0],['Mi5',300],['Sol5',0],['Fa♯5',300],['La5',0],['Sol5',300],['La5',50],['Si5',50],
    ['Fa♯5',300],['La5',0],['Mi5',300],['Sol5',0],['Re♯5',300],['Fa♯5',0],['Mi5',300]
  ];

  return (
    <div className="App">
      {syllables.map((note, index) => (
        <Key syllable={note} key={index} />
      ))}
      <button className="songs" onClick={() => playSong(furR, furL)}>Für</button>
      <button className="songs" onClick={() => playSong(rondoR)}>Rondo</button>
      {/* <button className="songs" onClick={() => playSong(sample)}>Sample</button> */}
      {/* <button className="songs" onClick={() => playSong(introR, introL)}>Sample 2</button> */}
      <button className="stop" onClick={() => clearTimeouts()}>Pause</button>
    </div>
  );
};

export default App;
