export const lazyPlayVideos = () => {
  const videos = document.getElementsByTagName("video"),
  fraction = 0.5;

  for(var i = 0; i < videos.length; i++) {
    const video = videos[i];
    const x = video.offsetLeft,
      y = video.offsetTop,
      w = video.offsetWidth,
      h = video.offsetHeight,
      r = x + w, //right
      b = y + h; //bottom
    let visibleX, visibleY, visible;

    visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
    visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));
    visible = visibleX * visibleY / (w * h);

    if (visible > fraction) {
        video.play();
        console.log('play');
    } else {
        video.pause();
        console.log('pause');
    }
  }
}
