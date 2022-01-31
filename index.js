console.log("test");
const audio = document.querySelector("audio");
const bgCover = document.querySelector(".bg-cover");
const cover 
const playBtn = document.querySelector(".play-pause");
let isPlaying = false;
const playPause = () => {
  if (isPlaying === false) {
    audio.play();
    isPlaying = true;
    playBtn.src = "./assets/svg/pause.png";
  } else if (isPlaying === true) {
    audio.pause();
    isPlaying = false;
    playBtn.src = "./assets/svg/play.png";
  }
};
