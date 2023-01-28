
console.log("Welcome to Spotify");

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio("./songs/1.mp3");
// audioElement.play();
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'))

let songs = [
  { songName: "Warriyo - Mortals [NCS Release]", filepath: "./songs/1.mp3",  coverpath: "covers/1.jpg" },
  { songName: "Cielo - Huma-Huma",filepath: "./songs/2.mp3", coverpath: "covers/2.jpg" },
  { songName: "DEAF KEV - Invincible [NCS Release]-320k", filepath: "./songs/3.mp3", coverpath: "covers/3.jpg"},
  { songName: "Different Heaven & EH!DE - My Heart [NCS Release]",filepath: "./songs4.mp3",coverpath: "covers/4.jpg"},
  { songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filepath: "./songs/5.mp3", coverpath: "covers/5.jpg" },
  { songName: "Ease My Mind", filepath: "./songs/6.mp3",coverpath: "covers/6.jpg" },
  { songName: "you matter to me", filepath: "./songs/7.mp3", coverpath: "covers/7.jpg"},
  { songName: "Run Away with me", filepath: "./songs/8.mp3", coverpath: "covers/8.jpg"},
  { songName: "Salam-e-Ishq", filepath: "./songs/9.mp3", coverpath: "covers/9.jpg" },
  { songName: "Warriyo - Mortals", filepath: "./songs/10.mp3", coverpath: "covers/10.jpg"},
]
   songItems.forEach((element,i) => {
    //console.log(element,i);
     element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    
});
//Handle Play/Pause click

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime<=0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

//listen to events
audioElement.addEventListener("timeupdate", () => {
 // console.log('timeupdate');

  //update seekbar

  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  //console.log(progress);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
      element.classList.remove('fa-pause-circle');
      element.classList.add('fa-play-circle');
  })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click', (e)=>{ 
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
      audioElement.src = `songs/${songIndex+1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
  })
})

document.getElementById('next').addEventListener('click', ()=>{
  if(songIndex>=9){
      songIndex = 0
  }
  else{
      songIndex += 1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
  if(songIndex<=0){
      songIndex = 0
  }
  else{
      songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
})