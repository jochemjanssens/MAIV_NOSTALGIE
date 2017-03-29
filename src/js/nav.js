const init = () => {
  const menuitems = [`savedmylive`, `sexualhealing`, `midnight`, `year`, `dvd`];
  menuitems.forEach(item => {
    const $li = document.querySelector(`.menuitem-${item}`);
    $li.addEventListener(`click`, clickHandler);
  });
};

const clickHandler = e => {
  const classname = e.currentTarget.className.replace(`menuitem-`, ``);
  const $element = document.querySelector(`.${classname}`);
  window.scroll({
    top: $element.offsetTop,
    left: 0,
    behavior: `smooth`
  });
};

export default () => {
  init();
};
