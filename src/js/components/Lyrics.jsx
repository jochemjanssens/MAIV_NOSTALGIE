import React from 'react';
import LyricsItem from '../components/LyricsItem';

const Lyrics = ({lyricsText}) => {
  return (
    <div className='lyrics'>
      <LyricsItem text={lyricsText[0]} />
      <LyricsItem text={lyricsText[1]} />
      <LyricsItem text={lyricsText[2]} />
    </div>
  );
};

Lyrics.propTypes = {
  lyricsText: Array.isRequired
};

export default Lyrics;
