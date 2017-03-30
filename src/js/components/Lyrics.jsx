import React, {PropTypes} from 'react';
import LyricsItem from '../components/LyricsItem';

const Lyrics = ({lyricsText}) => {
  return (
    <div className='lyrics'>
      <LyricsItem text={lyricsText[0]} className='previousLyrics' />
      <LyricsItem text={lyricsText[1]} className='currentLyrics' />
      <LyricsItem text={lyricsText[2]} className='nextLyrics' />
    </div>
  );
};

Lyrics.propTypes = {
  lyricsText: PropTypes.array.isRequired
};

export default Lyrics;
