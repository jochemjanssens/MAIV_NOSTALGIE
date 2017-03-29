import React, {PropTypes} from 'react';

const LyricsItem = ({text}) => {

  return (
    <p>{text}</p>
  );
};

LyricsItem.propTypes = {
  text: PropTypes.string.isRequired
};

export default LyricsItem;
