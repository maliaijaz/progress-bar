function increaseBarProgress() {
  var elem = document.getElementById("bar");
  var width = 0;
  var time = setInterval(frame, 10);
  function frame() {
    if (width == 100) {
      clearInterval(time);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}
