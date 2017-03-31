const $overlayone = document.querySelector(`.overlayone`);
const $overlaytwo = document.querySelector(`.overlaytwo`);
const $overlaythree = document.querySelector(`.overlaythree`);


const lijn = document.querySelector(`.lijn`);
let progress = 0;
let length;
const startPos = 7200;
let elementVisible1 = false;
let elementVisible2 = false;
let elementVisible3 = false;

const init = () => {
  length = lijn.getTotalLength();
  lijn.style.strokeDasharray = `${length * progress} ${length}`;

  window.addEventListener(`scroll`, onScroll);
};

const onScroll = () => {
  drawLine();
  calculatePoints();
};

const calculatePoints = () => {
  const hoogtemidnight = document.querySelector(`.midnight-kaart`).offsetHeight;
  const startpunt01 = window.innerHeight / 2;
  const eindpunt01 = (window.innerHeight / 2) - (document.querySelector(`.overlayone`).offsetHeight);

  const startpunt02 = - ((hoogtemidnight / 2) - document.querySelector(`.overlaytwo`).offsetHeight);
  const eindpunt02 = startpunt02 - (document.querySelector(`.overlaytwo`).offsetHeight) + 200;

  const startpunt03 = - hoogtemidnight + (document.querySelector(`.overlaythree`).offsetHeight * 1.5);
  const eindpunt03 = - hoogtemidnight + (document.querySelector(`.overlaythree`).offsetHeight / 2);

  showOverlayOne($overlayone, startpunt01, eindpunt01);
  showOverlayTwo($overlaytwo, startpunt02, eindpunt02);
  showOverlayThree($overlaythree, startpunt03, eindpunt03);
};

const drawLine = () => {
  const totalHeight = document.body.scrollHeight - window.innerHeight - startPos;
  const position = window.scrollY - startPos;
  progress = (position / totalHeight)  / 0.6;
  lijn.style.strokeDasharray = `${length * progress} ${length}`;
};

const showOverlayOne = (item, start, stop) => {
  const $midnightkaart = document.querySelector(`.midnight-kaart`).getBoundingClientRect();
  if ($midnightkaart.top <= start && $midnightkaart.top >= stop) {
    item.classList.remove(`overlayhidden`);
    animateOverlay(item, elementVisible1);
    elementVisible1 = true;
  }
  if ($midnightkaart.top <= stop || $midnightkaart.top >= start) {
    animateOverlayOut(item, elementVisible1);
    item.classList.add(`overlayhidden`);
    elementVisible1 = false;
  }
};

const showOverlayTwo = (item, start, stop) => {
  const $midnightkaart = document.querySelector(`.midnight-kaart`).getBoundingClientRect();
  if ($midnightkaart.top <= start && $midnightkaart.top >= stop) {
    item.classList.remove(`overlayhidden`);
    animateOverlay(item, elementVisible2);
    elementVisible2 = true;
  }
  if ($midnightkaart.top <= stop || $midnightkaart.top >= start) {
    animateOverlayOut(item, elementVisible2);
    item.classList.add(`overlayhidden`);
    elementVisible2 = false;
  }
};

const showOverlayThree = (item, start, stop) => {
  const $midnightkaart = document.querySelector(`.midnight-kaart`).getBoundingClientRect();
  if ($midnightkaart.top <= start && $midnightkaart.top >= stop) {
    item.classList.remove(`overlayhidden`);
    animateOverlay(item, elementVisible3);
    elementVisible3 = true;
  }
  if ($midnightkaart.top <= stop || $midnightkaart.top >= start) {
    animateOverlayOut(item, elementVisible3);
    item.classList.add(`overlayhidden`);
    elementVisible3 = false;
  }
};

const animateOverlay = ($el, visible) => {
  if (visible === false) {
    $el.animate({
      opacity: [0, 1]
    },
     500
    );
  }
};

const animateOverlayOut = ($el, visible) => {
  if (visible === true) {
    $el.animate({
      opacity: [1, 0]
    },
     250
    );
  }
};

export default () => {
  init();
};
