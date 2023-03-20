import React from 'react';
import ReactDOM from "react-dom";

export default class ImageDetails extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
          <div id="details">
            <div>
              <input id="filtre" type="text" placeholder="filtre image..."
              value = { this.props.filterTexte }
              onChange = { this.props.filterChanged }
              />
            </div>
            <img src = {this.props.image} alt = {this.props.texte} title={this.props.texte} key={this.props.image} />

            <legend className="legende"> {this.props.texte} </legend>
          </div>
         );
  }
}
