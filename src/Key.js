import React from "react";

const Key = ({ syllable }) => {
  let isTouching = false;

  const playNote = () => {
    const audio = new Audio(`/content/${syllable}.mp3`);
    audio.currentTime = 0;
    audio.volume = 0.1;
    audio.play();
    setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
    }, 5500);
  };

  const onMouse = () => {
    if (!isTouching) {
      playNote();
    } else {
      isTouching = false;
    }
  };

  const onTouch = () => {
    playNote();
    isTouching = true;
  };

  return (
    <button
      className={syllable.includes("♯") ? "note sharp" : "note syllable"}
      onMouseDown={onMouse}
      onTouchStart={onTouch}
    >
      <p>{syllable}</p>
    </button>
  );
};

export default Key;
