const video = () => {

// elements
const player = document.querySelector('.video__player');
const video = player.querySelector('.video__player video');
const togglePlayButton = player.querySelector('.video__player--controlls');

// fns
function togglePlayVideo() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  const icon = this.paused;
  if (icon === true) {
    togglePlayButton.classList.remove('video__player--hiddenControlls');
  } else {
    togglePlayButton.classList.add('video__player--hiddenControlls');
  }
}

// listeners
player.addEventListener('click', togglePlayVideo);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

};
