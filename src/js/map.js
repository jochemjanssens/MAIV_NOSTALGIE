const overlayone = document.querySelector(`.overlayone`);
const overlaytwo = document.querySelector(`.overlaytwo`);
const overlaythree = document.querySelector(`.overlaythree`);

const lijn = document.querySelector(`.lijn`);
let progress = 0;
let length;
const startPos = 7200;
const init = () => {
  length = lijn.getTotalLength();
  lijn.style.strokeDasharray = `${length * progress} ${length}`;

  window.addEventListener(`scroll`, onScroll);


};

const onScroll = () => {
  window.requestAnimationFrame(() => {
    drawLine();
    showOverlayeone();
    showOverlayetwo();
    showOverlayethree();

  });
};

const drawLine = () => {
  const totalHeight = document.body.scrollHeight - window.innerHeight - startPos;
  const position = window.scrollY - startPos;
  progress = (position / totalHeight)  / 0.6;
  lijn.style.strokeDasharray = `${length * progress} ${length}`;
};


const showOverlayeone = () => {
  if (window.scrollY >= 7500 || window.scroll <= 7800) {
    overlayone.classList.remove(`overlayhidden`);
  }
  if (window.scrollY > 7800 || window.scrollY < 7500) {
    overlayone.classList.add(`overlayhidden`);
  }
  console.log(overlayone);
};

const showOverlayetwo = () => {
  console.log(overlaytwo);
  if (window.scrollY >= 8400 || window.scroll <= 8600) {
    overlaytwo.classList.remove(`overlaytwohidden`);
  }
  if (window.scrollY > 8600 || window.scrollY < 8400) {
    overlaytwo.classList.add(`overlaytwohidden`);
  }
};

const showOverlayethree = () => {
  if (window.scrollY >= 9000 || window.scroll <= 9300) {
    overlaythree.classList.remove(`overlaythreehidden`);
  }
  if (window.scrollY > 9300 || window.scrollY < 9000) {
    overlaythree.classList.add(`overlaythreehidden`);
  }
};



init();
