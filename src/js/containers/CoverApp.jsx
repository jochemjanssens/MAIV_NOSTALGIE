import React, {Component} from 'react';
import Picture from '../components/Picture';
import PictureTitle from '../components/PictureTitle';

class CoverApp extends Component {

  state = {
    imageData: [
      {
        title: `De cover van Sexual Healing`,
        filename: `cover-sexualhealing`
      },
      {
        title: `De cover van Ain't no mountain high enough`,
        filename: `cover-aintnomountian`
      },
      {
        title: `De cover van Midnight Love`,
        filename: `cover-midnightlove`
      }
    ],
    currentId: 0
  }

  render() {
    const {imageData} = this.state;
    const {currentId} = this.state;

    const handleClick = () => {
      const {currentId} = this.state;
      let newId = currentId + 1;
      if (newId >= {imageData}.imageData.length) {
        newId = 0;
      }
      this.setState({currentId: newId});
    };

    return (
      <div onClick={handleClick}>
        <p>Klik om de foto om andere covers te ontdekken</p>
        <Picture filename={imageData[currentId].filename} />
        <PictureTitle title={imageData[currentId].title} />
      </div>
    );
  }
}

export default CoverApp;
