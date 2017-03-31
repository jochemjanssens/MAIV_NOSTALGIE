const form = document.querySelector(`form`);
const naam = document.querySelector(`.wandeling-confirmation`);
const tijdsaanduiding = document.querySelector(`.tijdsaanduiding`);
const date = new Date();

const init = () => {
  form.addEventListener(`focusout`, submitHandler);
  form.addEventListener(`submit`, submitHandler);
  showDate();
};

const submitHandler = e => {
  e.preventDefault();
  const value = document.querySelector(`.input`).value;
  const inputvalue = document.querySelector(`.inputvalue`);
  inputvalue.innerHTML = value;
  naam.classList.remove(`wandeling-confirmatio-hidden`);
  naam.innerHTML = `${`begin eraan ${  value}`} ! `;

};

const showDate = () => {
  const currentTime = date.getHours();
  if (currentTime >= 0 && currentTime <= 8) {
    tijdsaanduiding.innerHTML = `Goedemorgen`;
  }
  else if (currentTime >= 9 && currentTime <= 11) {
    tijdsaanduiding.innerHTML = `Goede voormiddag`;
  }
  else if (currentTime >= 12 && currentTime <= 14) {
    tijdsaanduiding.innerHTML = `Goedemiddag`;
  }
  else if (currentTime >= 15 && currentTime <= 17) {
    tijdsaanduiding.innerHTML = `Goede namiddag`;
  }
  else if (currentTime >= 17 && currentTime <= 24) {
    tijdsaanduiding.innerHTML = `Goedenavond`;
  }
};

export default () => {
  init();
};
