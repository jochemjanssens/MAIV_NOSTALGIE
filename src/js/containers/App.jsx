import React, {Component} from 'react';

import Lyrics from '../components/Lyrics';
import Musicplayer from '../components/Musicplayer';

import data from '../data/data';

class App extends Component {

  state = {
    lyricsText: [
      ``, ``, ``
    ]
  }

  componentDidMount() {
    this.interval = setInterval(this.timer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  timer = () => {
    const $audio = document.querySelector(`.sexualhealing-audio`);
    if ($audio) {
      const currentTime = $audio.currentTime;
      let nextStartTime = 0;
      let nextLyrics = ``;
      let previousLyrics = ``;
      for (let i = 0;i < data.length;i ++) {
        if (i + 1 >= data.length) {
          nextStartTime = 1000000000000;
        } else {
          nextStartTime = data[i + 1].starttime;
        }
        if (currentTime >= data[i].starttime && currentTime < nextStartTime) {
          if (i === 0) {
            previousLyrics = ``;
          } else {
            previousLyrics = data[i - 1].lyrics;
          }
          if (i + 1 >= data.length) {
            nextLyrics = ``;
          } else {
            nextLyrics = data[i + 1].lyrics;
          }
          const currentLyrics = data[i].lyrics;
          const lyricsText = [previousLyrics, currentLyrics, nextLyrics];
          this.setState({lyricsText});
        }
      }
    }
  }

  render() {
    const {lyricsText} = this.state;

    return (
      <div>
        <Lyrics lyricsText={lyricsText} />
        <Musicplayer />
      </div>
    );
  }
}

export default App;
