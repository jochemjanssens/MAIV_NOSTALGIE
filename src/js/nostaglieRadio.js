const svgns = `http://www.w3.org/2000/svg`;
let audio, frequencyData, analyser;
const elements = 18;
let pause = true;

const $playbutton = document.querySelector(`.nostalgie-playbutton`);

const init = () => {
  setupEquilizer();
  $playbutton.addEventListener(`click`, handlePlay);
};

const handlePlay = () => {
  const $nostalgieplayer = document.querySelector(`.nostalgieplayer`);
  $nostalgieplayer.play();
  if ($nostalgieplayer.muted) {
    $nostalgieplayer.muted = false;
    $playbutton.src = `assets/images/pause_zwart.svg`;
    pause = false;
    audio.play();
    renderFrame();
  } else {
    pause = true;
    $nostalgieplayer.muted = true;
    $playbutton.src = `assets/images/play_zwart.svg`;
  }
};

const setupEquilizer = () => {
  const ctx = new AudioContext();
  audio = document.querySelector(`.equilizer-audio`);
  const audioSrc = ctx.createMediaElementSource(audio);
  analyser = ctx.createAnalyser();
  // we have to connect the MediaElementSource with the analyser
  audioSrc.connect(analyser);
  // we could configure the analyser: e.g. analyser.fftSize (for further infos read the spec)
  // frequencyBinCount tells you how many values you'll receive from the analyser
  frequencyData = new Uint8Array(analyser.frequencyBinCount);
  createSVGElements();
};

const createSVGElements = () => {
  const $svg = document.querySelector(`.equilizer`);
  const width = $svg.getAttribute(`width`);
  const height = $svg.getAttribute(`height`);

  for (let i = 0;i < elements;i ++) {
    const rect = document.createElementNS(svgns, `rect`);
    rect.setAttributeNS(null, `x`, (width / elements) * i);
    rect.setAttributeNS(null, `y`, height);
    rect.setAttributeNS(null, `height`, 0);
    rect.setAttributeNS(null, `width`, (width / elements));
    rect.setAttributeNS(null, `fill`, `#000`);
    rect.classList.add(`item${i}`);
    $svg.appendChild(rect);
  }
};

const renderFrame = () => {
  // update data in frequencyData
  analyser.getByteFrequencyData(frequencyData);
  // render frame based on values in frequencyData
  const $svg = document.querySelector(`.equilizer`);
  const height = $svg.getAttribute(`height`);

  for (let i = 0;i < elements;i ++) {
    const $item = $svg.querySelector(`.item${i}`);
    const data = frequencyData[i];
    $item.setAttribute(`height`, data / 4);
    $item.setAttribute(`y`, height - (data / 4));
  }

  if (pause) return;
  requestAnimationFrame(renderFrame);
};

export default () => {
  init();
};
