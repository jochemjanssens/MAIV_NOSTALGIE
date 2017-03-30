const playBtn = document.querySelector(`.dvd-play-knop`);
const dvd = document.querySelector(`.dvd-video`);
const dvdStart = document.querySelector(`.dvd-start`);
const dvdTitles = document.querySelectorAll(`.dvd-tekst`);

const init = () => {
  playBtn.addEventListener(`click`, playHandler);

};

const playHandler = () => {
  if (dvd.classList.contains(`dvd-hidden`)) {
    dvd.classList.remove(`dvd-hidden`);
    dvdStart.innerHTML = `Toon me de tekst`;
    playBtn.src = `assets/svg/dvdstop.svg`;

    dvdTitles.forEach(dvdtitle => {
      dvdtitle.classList.add(`dvd-tekst-hidden`);
    });
  } else {
    dvd.classList.add(`dvd-hidden`);
    dvdStart.innerHTML = `Start de documentaire`;
    playBtn.src = `assets/images/pijl.svg`;
    dvdTitles.forEach(dvdtitle => {
      dvdtitle.classList.remove(`dvd-tekst-hidden`);
    });
  }
};

export default () => {
  init();
};
