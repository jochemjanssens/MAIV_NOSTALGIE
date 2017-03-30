const form = document.querySelector(`form`);
const naam = document.querySelector(`.wandeling-confirmation`);

const init = () => {
  form.addEventListener(`focusout`, submitHandler);
};

const submitHandler = e => {
  e.preventDefault();
  const value = document.querySelector(`.input`).value;
  const inputvalue = document.querySelector(`.inputvalue`);
  inputvalue.innerHTML = value;
  naam.classList.remove(`wandeling-confirmatio-hidden`);
  naam.innerHTML = `${`begin eraan ${  value}`} ! `;
};

export default () => {
  init();
};
