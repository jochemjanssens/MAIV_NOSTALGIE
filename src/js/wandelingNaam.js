const form = document.querySelector(`form`);

const init = () => {
  form.addEventListener(`submit`, submitHandler);
};

const submitHandler = e => {
  e.preventDefault();
  const value = document.querySelector(`.input`).value;
  const inputvalue = document.querySelector(`.inputvalue`);
  inputvalue.innerHTML = value;
};

export default () => {
  init();
};
