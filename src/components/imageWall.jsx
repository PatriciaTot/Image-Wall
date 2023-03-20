import React from 'react';
import ReactDOM from "react-dom";

export default class ImageWall extends React.Component {

  constructor(props) {
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleMouseOver(event) {
  this.props.imageChanged( event.target.src, event.target.alt );
  }

  /*
  const filtreImages = event => {
  const images = document.querySelectorAll('div#mur img');
  const texte = event.target.value.toLowerCase();
  [...images].forEach(image => image.style.display = 'none');
  [...images].filter(image => image.title.toLowerCase().includes(texte)).forEach(image => image.style.display = 'initial');
  }
  */

  render() {
        const images = this.props.images.map( data =>
          <img src = {data.image} alt = {data.texte} title = {data.texte} onMouseOver = { this.handleMouseOver }  key = {data.image} />
        );
        return (
              <div id="mur">
                {images}
              </div>
        );
    }
}
