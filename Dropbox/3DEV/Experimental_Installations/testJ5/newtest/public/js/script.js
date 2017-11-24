//import Game from './classes/Game';
let socket;

const init = () => {

  socket = io.connect('/');
  socket.on('update', message => {
    console.log(message);
  });

  //new Game();
};
init();
