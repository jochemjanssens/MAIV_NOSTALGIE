const naald = document.querySelector(`.naald`);
const lp = document.querySelector(`.lp-plaat`);
const sexualaudio = document.querySelector(`.sexualhealing-audio`);
let isClicked = false;
let lpAnimatie;


const init = () => {
  naald.addEventListener(`click`, clickHandler);
};

const clickHandler = () => {
  console.log(`entry ${isClicked}`);
  if (isClicked === false) {
    isClicked = true;
    console.log(isClicked);
    animateNaaldUp(naald);
    animatePlaat(lp);
    sexualaudio.play();
  } else {
    isClicked = false;
    lpAnimatie.pause();
    sexualaudio.pause();
    animateNaaldDown(naald);
  }
};

const animateNaaldUp = naald => {
  naald.animate([
    {
      transform: `rotate(0deg)`
    },
    {
      transform: `rotate(25deg)`
    }
  ],  {
    duration: 500,
    fill: `forwards`
  });

};

const animateNaaldDown = naald => {
  console.log(`d`);
  naald.animate([
    {
      transform: `rotate(25deg)`
    },
    {
      transform: `rotate(0deg)`
    }
  ],  {
    duration: 500,
    fill: `forwards`
  });

};


const animatePlaat = lp => {
  lpAnimatie = lp.animate([
    {
      transform: `rotate(0deg)`
    },
    {
      transform: `rotate(360deg)`
    }
  ],  {
    duration: 3000,
    iterations: Infinity,
    delay: 800
  });

};

export default () => {
  init();
};
