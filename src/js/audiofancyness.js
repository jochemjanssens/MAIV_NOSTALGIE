const svgns = `http://www.w3.org/2000/svg`;

const music = () => {
  const ctx = new AudioContext();
  const audio = document.querySelector(`.sexualhealing-audio`);
  const audioSrc = ctx.createMediaElementSource(audio);
  const analyser = ctx.createAnalyser();
  const elements = 50;
  // we have to connect the MediaElementSource with the analyser
  audioSrc.connect(analyser);
  // we could configure the analyser: e.g. analyser.fftSize (for further infos read the spec)

  // frequencyBinCount tells you how many values you'll receive from the analyser
  const frequencyData = new Uint8Array(analyser.frequencyBinCount);

  // we're ready to receive some data!
  // loop
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
  createSVGElements();

  function renderFrame() {
    requestAnimationFrame(renderFrame);
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
  }
  audio.play();
  renderFrame();
};

export default () => {
  music();
};
