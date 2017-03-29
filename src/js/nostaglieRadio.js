const $playbutton = document.querySelector(`.nostalgie-playbutton`);

const init = () => {
  $playbutton.addEventListener(`click`, handlePlay);
};

const handlePlay = () => {
  const $nostalgieplayer = document.querySelector(`.nostalgieplayer`);
  $nostalgieplayer.play();
  if ($nostalgieplayer.muted) {
    $nostalgieplayer.muted = false;
    $playbutton.src = `assets/images/pause_zwart.svg`;
  } else {
    $nostalgieplayer.muted = true;
    $playbutton.src = `assets/images/play_zwart.svg`;
  }
  console.log($nostalgieplayer);
};

export default () => {
  init();
};
