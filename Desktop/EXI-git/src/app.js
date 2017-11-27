/* eslint-disable */
const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({
  port: process.env.PORT || 8080,
  host: `0.0.0.0`
});
const io = require('socket.io')(server.listener);

server.start(err => {
  if (err) throw err;
});

const inert = require(`inert`);
server.register(inert, err => {
  if (err) {
    throw err;
  }
  server.route({
    method: `GET`,
    path: `/{param*}`,
    handler: {
      directory: {
        path: `./public`,
        redirectToSlash: true,
        index: true
      }
    }
  })
});

const five = require(`johnny-five`);

const board = new five.Board();

board.on(`ready`, function() {
  const photoresistor1 = new five.Sensor({
    pin: `A0`,
    freq: 10
  });
  const photoresistor2 = new five.Sensor({
    pin: `A5`,
    freq: 10
  });
  const led = new five.Led(11);

  let raak1 = false;
  let raak2 = false;
  led.fadeIn();
  photoresistor1.on(`data`, function() {
    console.log('1: ' + this.value);
    if (this.value > 950 && raak1 === false) {
      console.log(`raak1`);
      io.sockets.emit(`update`, {"one": true});
      raak1 = true;
    } else if(this.value < 950 && raak1 === true)  {
      io.sockets.emit(`update`, {"one": false});

      raak1 = false;
    }
  });
  photoresistor2.on(`data`, function() {
    console.log('2: ' + this.value);
    if (this.value > 950 && raak2 === false) {
      console.log(`raak1`);
      io.sockets.emit(`update`, {"two": true});
      raak2 = true;
    } else if(this.value < 950 && raak2 === true)  {
      io.sockets.emit(`update`, {"two": false});

      raak2 = false;
    }
  });
});
