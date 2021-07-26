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

  handleMapViewChange = (ev) => {
    const {
      onMapViewChange
    } = this.props;
    if (ev.newValue && ev.newValue.lookAt) {
      const lookAt = ev.newValue.lookAt;
      // adjust precision
      const lat = Math.trunc(lookAt.position.lat * 1E7) / 1E7;
      const lng = Math.trunc(lookAt.position.lng * 1E7) / 1E7;
      const zoom = Math.trunc(lookAt.zoom * 1E2) / 1E2;
      onMapViewChange(zoom, lat, lng);
    }
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
        layers.raster.satellite.map,
        {
          pixelRatio: window.devicePixelRatio,
          center: {lat: 39.3940676, lng: -98.2670228},
          zoom: 4.5,
        },
      );

      this.map = map;

        H.ui.UI.createDefault(map, layers);
      
        // attach the listener
        map.addEventListener('mapviewchange', this.handleMapViewChange);
        // add the interactive behaviour to the map
        new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

        // this.addMarkers()

      onResize(this.ref.current, () => {
        map.getViewPort().resize();
      });
    }
  }

  addMarkers = () => {
    const pins = this.props.pins.map(pin => new H.map.Marker({lat: parseFloat(pin.latitude), lng: parseFloat(pin.longitude)}))
    this.map.addObjects(pins)

    // var smokiesMarker = new H.map.Marker({lat:35.637, lng: -83.597});
    // this.map.addObject(smokiesMarker);
    // keeping smokiesMarker for reference on creating new pin
  }

  componentDidUpdate() {
    const {
      lat,
      lng,
      zoom
    } = this.props;

    if (this.map) {
      // prevent the unnecessary map updates by debouncing the
      // setZoom and setCenter calls
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.map.setZoom(zoom);
        this.map.setCenter({lat, lng});
        this.addMarkers()
      }, 100);
    }
  }

  componentWillUnmount() {
    if (this.map) {
      this.map.removeEventListener('mapviewchange', this.handleMapViewChange);
    }
  }

  render() {
    return (
      <div
        style={{ position: 'relative', width: '60%', height:'600px', margin:'auto' }}
        ref={this.ref}
      />
    )
  }
}
