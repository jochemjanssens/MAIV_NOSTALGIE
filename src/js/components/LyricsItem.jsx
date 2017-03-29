import React, {PropTypes} from 'react';

const LyricsItem = ({text, className}) => {

  return (
    <p className={className}>{text}</p>
  );
};

LyricsItem.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

export default LyricsItem;
