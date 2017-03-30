import React, {PropTypes} from 'react';

const PictureTitle = ({title}) => {

  // const {title} = props;

  return (
    <p className='coverimg-text'>{title}</p>
  );

};

PictureTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default PictureTitle;
