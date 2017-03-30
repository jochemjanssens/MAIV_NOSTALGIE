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
  const totalHeight = document.body.scrollHeight - window.innerHeight - startPos;
  const position = window.scrollY - startPos;
  progress = (position / totalHeight)  / 0.6;
  lijn.style.strokeDasharray = `${length * progress} ${length}`;
};

const showOverlayeone = () => {
  if (window.scrollY >= 7700 && window.scrollY <= 8000) {
    $overlayone.classList.remove(`overlayhidden`);
    animateOverlay($overlayone, elementVisible1);
    elementVisible1 = true;
  }
  if (window.scrollY > 8000 || window.scrollY < 7700) {
    elementVisible1 = false;
    $overlayone.classList.add(`overlayhidden`);
  }
};

const showOverlayetwo = () => {
  if (window.scrollY >= 8200 && window.scrollY <= 8800) {
    $overlaytwo.classList.remove(`overlayhidden`);
    animateOverlay($overlaytwo, elementVisible2);
    elementVisible2 = true;
  }
  if (window.scrollY > 8800 || window.scrollY < 8200) {
    $overlaytwo.classList.add(`overlayhidden`);
    elementVisible2 = false;
  }
};

const showOverlayethree = () => {
  if (window.scrollY >= 9100 && window.scrollY <= 9500) {
    $overlaythree.classList.remove(`overlayhidden`);
    animateOverlay($overlaythree, elementVisible3);
    elementVisible3 = true;
  }
  if (window.scrollY > 9500 || window.scrollY < 9100) {
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
