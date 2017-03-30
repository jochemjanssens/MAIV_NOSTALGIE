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
  showOverlayeone();
  showOverlayetwo();
  showOverlayethree();
};

const drawLine = () => {

  //console.log($midnightkaart.top);
  const totalHeight = document.body.scrollHeight - window.innerHeight - startPos;
  const position = window.scrollY - startPos;
  progress = (position / totalHeight)  / 0.6;
  lijn.style.strokeDasharray = `${length * progress} ${length}`;
};

const showOverlayeone = () => {
  const $midnightkaart = document.querySelector(`.midnight-kaart`).getBoundingClientRect();
  console.log($midnightkaart.top);
  if ($midnightkaart.top <= 340) {
    $overlayone.classList.remove(`overlayhidden`);
    animateOverlay($overlayone, elementVisible1);
    elementVisible1 = true;
  }
  if ($midnightkaart.top >= - 10) {
    $overlayone.classList.add(`overlayhidden`);
    elementVisible2 = false;
  }
};

const showOverlayetwo = () => {
  const $midnightkaart = document.querySelector(`.midnight-kaart`).getBoundingClientRect();
  if ($midnightkaart.top <= - 270) {
    $overlayone.classList.remove(`overlayhidden`);
    animateOverlay($overlayone, elementVisible2);
    elementVisible1 = true;
  }
  if ($midnightkaart.top >= - 570) {
    $overlaytwo.classList.add(`overlayhidden`);
    elementVisible2 = false;
  }
};

const showOverlayethree = () => {
  const $midnightkaart = document.querySelector(`.midnight-kaart`).getBoundingClientRect();
  if ($midnightkaart.top <= - 800) {
    $overlayone.classList.remove(`overlayhidden`);
    animateOverlay($overlayone, elementVisible3);
    elementVisible1 = true;
  }
  if ($midnightkaart.top >= - 1000) {
    $overlaythree.classList.add(`overlayhidden`);
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

export default () => {
  init();
};
