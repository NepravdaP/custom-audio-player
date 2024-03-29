console.log("test");
const audio = document.querySelector("audio");
const bgCover = document.querySelector(".bg-cover");
const cover = document.querySelector(".thumbnail");
const playBtn = document.querySelector(".play-pause");
const artist = document.querySelector(".artist-name");
const title = document.querySelector(".song-title");
const currTime = document.querySelector(".currentTime");
const durationTime = document.querySelector(".durationTime");
const progressBar = document.querySelector("input");

const cssVar = document.documentElement;
const titleColorArr = ["#4f1a20", "#1C4242", "#F4EA77"];
const CoverSrcArr = [
  "./assets/img/CIA.jpg",
  "./assets/img/lemonade.png",
  "./assets/img/dontstartnow.png",
];
const songSrcArr = [
  "./assets/audio/new-politics-cia.mp3",
  "./assets/audio/beyonce.mp3",
  "./assets/audio/dontstartnow.mp3",
];
const songTitleArr = ["CIA", "Don't Hurt Yourself", "Don't Start Now"];
const songArtistArr = ["New Politics", "Beyonce", "Dua Lipa"];
let currSong = 0;
let isPlay = false;

// const durInterval = () => {
//   while (audio.currentTime != audio.duration) {
//     const interval = setInterval(() => {
//       console.log(audio.currentTime);
//     }, 1000);
//     if (audio.currentTime === audio.duration) {
//       clearInterval(interval);
//     }
//   }
// };

// audio.addEventListener("loadeddata", () => {
//   currTime.textContent = audio.currentTime;
//   durationTime.textContent = audio.duration;
// });

const songAssets = () => {
  artist.textContent = songArtistArr[currSong];
  title.textContent = songTitleArr[currSong];
  audio.src = songSrcArr[currSong];
  bgCover.src = CoverSrcArr[currSong];
  cover.src = CoverSrcArr[currSong];

  // progressThumb.style = `background:${titleColorArr[currSong]}`;
  cssVar.style.setProperty("--color", titleColorArr[currSong]);
};

const playPause = () => {
  if (!isPlay) {
    audio.play();
    isPlay = true;
    playBtn.src = "./assets/svg/pause.png";
    cover.style = "transform: scale(1.15)";
    audio.volume = 0.2;
  } else if (isPlay) {
    audio.pause();
    isPlay = false;
    playBtn.src = "./assets/svg/play.png";
    cover.style = "transform: scale(1)";
  }
};

const playNext = () => {
  if (currSong === 2) {
    currSong = 0;
  } else {
    currSong++;
  }
  songAssets();

  isPlay = false;
  playPause();
};
const playPrev = () => {
  if (currSong === 0) {
    currSong = 2;
  } else {
    currSong--;
  }
  songAssets();

  audio.currentTime = 0;
  isPlay = false;
  playPause();
};
audio.addEventListener("timeupdate", () => {
  const minutes = Math.floor(audio.currentTime / 60);
  const seconds = Math.floor(audio.currentTime - minutes * 60);
  currTime.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  const durMin = Math.floor(audio.duration / 60);
  const durSec = Math.floor(audio.duration - durMin * 60);
  durationTime.textContent = `${durMin}:${durSec < 10 ? "0" + durMin : durSec}`;
  const progress = (audio.duration / 100) * audio.currentTime;
  progressBar.max = audio.duration;
  progressBar.value = audio.currentTime;
});

progressBar.addEventListener("change", (e) => {
  audio.currentTime = e.target.value;
  isPlay = false;
  playPause();
});
