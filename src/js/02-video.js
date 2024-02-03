import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

const onTimeUpdate = throttle(() => {
    localStorage.setItem('videoplayer-current-time', player.getCurrentTime());
  }, 1000);
  
  player.on('timeupdate', onTimeUpdate);
  
  const storedTime = localStorage.getItem('videoplayer-current-time');
  
  if (storedTime) {
    player.setCurrentTime(parseFloat(storedTime));
  }
