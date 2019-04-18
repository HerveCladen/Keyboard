import React from 'react';

const Key = ({syllable}) => {
    const playNote = () => {
        var audio = new Audio(`/content/${syllable}.mp3`);
        audio.volume = 0.2;
        audio.currentTime = 0;
        audio.play();
        setTimeout(() => {
            audio.pause();
            audio.currentTime = 0;
        }, 5500);
    };
    return(        
        <button className={syllable.includes("♯") ? "sharp" : "syllable"} onClick={playNote}>
            <p>{syllable}</p>
        </button>
    );
}

export default Key;