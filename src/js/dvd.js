const playBtn = document.querySelector(`.dvd-play-knop`);
const dvd = document.querySelector(`.dvd-video`);
const dvdStart = document.querySelector(`.dvd-start`);
const dvdTitles = document.querySelectorAll(`.dvd-tekst`);

const init = () => {
  console.log(playBtn);
  playBtn.addEventListener(`click`, playHandler);

};

const playHandler = () => {
  if (dvd.classList.contains(`dvd-hidden`)) {
    dvd.classList.remove(`dvd-hidden`);
    dvdStart.innerHTML = `Stop de documentaire`;
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

init();
