import React from 'react';
import Map from '../components/Map';
import MapPosition from '../components/MapPosition';


export default class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 0,
      lat: 0,
      lng: 0
    }
  }

  handleInputChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  handleMapViewChange = (zoom, lat, lng) => {
    this.setState({
      lat,
      lng,
      zoom
    })
  }

  render() {
    const {
      zoom,
      lat,
      lng
    } = this.state;
    return (
      <div className="MapContainer">
        <Map
          lat={lat}
          lng={lng}
          onMapViewChange={this.handleMapViewChange}
          zoom={zoom}
          user={this.props.user}
          pins={this.props.pins}
        />
        <MapPosition
          lat={lat}
          lng={lng}
          onChange={this.handleInputChange}
          zoom={zoom}
        />
      </div>
    );
  }
}