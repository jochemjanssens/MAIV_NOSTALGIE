import React, {PropTypes}  from 'react';

const Picture = ({filename}) => {
  return (
    <picture>
      <source type='image/webp' srcSet={`assets/images/${filename}.webp`} />
      <img src={`assets/images/${filename}.png`}
          srcSet={`assets/images/${filename}.png 517w,
              assets/images/${filename}50.png 260w,
              assets/images/${filename}25.png 130w `}
          sizes='517px'
          width='517' height='510' alt={`${filename}`} />
    </picture>
  );
};

Picture.propTypes = {
  filename: PropTypes.string.isRequired
};

export default Picture;
