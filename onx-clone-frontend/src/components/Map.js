// import { Component } from "react";

// export default class Map extends Component {
//     constructor(props) {
//         super()
//         // this.state = {}
//     }

//     render() {
//         return (
//             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207559.4085183397!2d-83.8837966788842!3d35.624872678687574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8859521e1372343d%3A0xa04eac8607697ce3!2sGreat%20Smoky%20Mountains!5e0!3m2!1sen!2sus!4v1625526467509!5m2!1sen!2sus" width="800" height="600" title="map" allowfullscreen="" loading="lazy"></iframe>
//         )
//     }
// }
// // mapStateToProps to get pins in to display on map somehow


import React from 'react';
import H from "@here/maps-api-for-javascript";
import onResize from 'simple-element-resize-detector';

require('dotenv').config()
let API_KEY = process.env.REACT_APP_API_KEY

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    // the reference to the container
    this.ref = React.createRef();
    // reference to the map
    this.map = null;
  }

  componentDidMount() {
    if (!this.map) {
      // instantiate a platform, default layers and a map as usual
      const platform = new H.service.Platform({
        apikey: API_KEY
      });
      const layers = platform.createDefaultLayers();
      const map = new H.Map(
        this.ref.current,
        layers.vector.normal.map,
        {
          pixelRatio: window.devicePixelRatio,
          center: {lat: 0, lng: 0},
          zoom: 2,
        },
      );
      onResize(this.ref.current, () => {
        map.getViewPort().resize();
      });
      this.map = map;
    }
  }

  render() {
    return (
      <div
        style={{ position: 'relative', width: '100%', height:'300px' }}
        ref={this.ref}
      />
    )
  }
}
