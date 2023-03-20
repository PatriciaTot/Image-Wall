import React from 'react';

/** importation des feuilles de style */
import '../assets/style/murImages.css';

/** importations des composants */
import ImageWall from './imageWall.jsx';
import ImageDetails from './imageDetails.jsx';

/** importation du tableau d'images */
import dataImages from '../data/dataImages.js';

/*
 define root component
*/
export default class ImageApp extends React.Component {
  constructor(props) {
    super(props);
    this.state={image : "../images/image5.jpg", texte : "la plus belle....", filterTexte : ""};
    this.imageChanged = this.imageChanged.bind(this);
    this.filterChanged = this.filterChanged.bind(this);
  }

  imageChanged(newImage, newTexte) {
    this.setState( {image : newImage, texte : newTexte} );
  }

  filterChanged(newFilterTexte) {
    this.setState( {filterTexte : newFilterTexte} );
  }

  render() {
    return (
      <div>
        <ImageWall images = {dataImages} imageChanged = {this.imageChanged} filterTexte = {this.state.filterTexte} />
        <ImageDetails image = {this.state.image} texte = {this.state.texte} filterChanged = {this.filterChanged}/>
      </div>
    );
  }
}
