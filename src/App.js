import React from 'react';
import Key from "./Key";
import './App.css';

const App = () => {
  const syllables = [                                           'La0','La♯0','Si0',
    'Do1','Do♯1','Re1','Re♯1','Mi1','Fa1','Fa♯1','Sol1','Sol♯1','La1','La♯1','Si1',
    'Do2','Do♯2','Re2','Re♯2','Mi2','Fa2','Fa♯2','Sol2','Sol♯2','La2','La♯2','Si2',
    'Do3','Do♯3','Re3','Re♯3','Mi3','Fa3','Fa♯3','Sol3','Sol♯3','La3','La♯3','Si3',
    'Do4','Do♯4','Re4','Re♯4','Mi4','Fa4','Fa♯4','Sol4','Sol♯4','La4','La♯4','Si4',
    'Do5','Do♯5','Re5','Re♯5','Mi5','Fa5','Fa♯5','Sol5','Sol♯5','La5','La♯5','Si5',
    'Do6','Do♯6','Re6','Re♯6','Mi6','Fa6','Fa♯6','Sol6','Sol♯6','La6','La♯6','Si6',
    'Do7','Do♯7','Re7','Re♯7','Mi7','Fa7','Fa♯7','Sol7','Sol♯7','La7','La♯7','Si7',
    'Do8']
  return(
    <div className="App">
      {syllables.map((note, index) => <Key syllable={note} key={index} />)}
    </div>
  );
};

export default App;
