import React, { Component } from 'react';
import { connect } from 'react-redux';

import { INITIAL_MAP_ZOOM, INITIAL_LOCATION } from '../utils/consts';

class Map extends Component {

  componentWillMount() {
    this.setMapReference = this.setMapReference.bind(this);
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.mapReference, {
      zoom: INITIAL_MAP_ZOOM,
      center: {
        lat: INITIAL_LOCATION.position.latitude,
        lng: INITIAL_LOCATION.position.longitude
      }
    });

    this.marker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: INITIAL_LOCATION.position.latitude,
        lng: INITIAL_LOCATION.position.longitude
      },
      animation: google.maps.Animation.DROP
    })
  }

  componentDidUpdate() {
    if (this.props.mapConfig.position.lat) {
      this.map.setCenter(this.props.mapConfig.position);
      this.map.setZoom(INITIAL_MAP_ZOOM);
      this.marker.setAnimation(google.maps.Animation.DROP);
      this.marker.setPosition(this.props.mapConfig.position);
    } else {
      let infoWindow = new google.maps.InfoWindow({ map: this.map});
      infoWindow.setContent('Error: The Geolocation service failed.');
      infoWindow.setPosition(this.marker.getPosition());
    }
  }

  setMapReference(mapReference) {
    this.mapReference = mapReference;
  }

  render() {
    return (
      <div className="map" ref={this.setMapReference}></div>
    );
  }
}

function mapStateToProps(state) {
  return { mapConfig: state.position }
}

export default connect(mapStateToProps, null)(Map);
