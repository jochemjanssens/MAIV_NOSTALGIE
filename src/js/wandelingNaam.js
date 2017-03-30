const form = document.querySelector(`form`);
const naam = document.querySelector(`.wandeling-confirmation`);
const tijdsaanduiding = document.querySelector(`.tijdsaanduiding`);
const date = new Date();

const init = () => {
  form.addEventListener(`focusout`, submitHandler);
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
  if (currentTime >= 0 && currentTime <= 10) {
    tijdsaanduiding.innerHTML = `Goedemorgen`;
  }
  else if (currentTime >= 11 && currentTime <= 13) {
    tijdsaanduiding.innerHTML = `Goedemiddag`;
  }
  else if (currentTime >= 14 && currentTime <= 24) {
    tijdsaanduiding.innerHTML = `Goedeavond`;
  }
};

export default () => {
  init();
};
