const naald = document.querySelector(`.naald`);
const lp = document.querySelector(`.lp-plaat`);
const sexualaudio = document.querySelector(`.sexualhealing-audio`);


const init = () => {
  naald.addEventListener(`click`, clickHandler);
};

const clickHandler = () => {
  if (!naald.classList.contains(`naaldAnimation`)) {
    naald.classList.add(`naaldAnimation`);
    lp.classList.add(`lp`);
    console.log(sexualaudio);
    sexualaudio.play();
  } else {
    naald.classList.remove(`naaldAnimation`);
    lp.classList.remove(`lp`);
    sexualaudio.pause();
  }
};

export default () => {
  init();
};
