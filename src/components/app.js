import React, { Component } from 'react';

import GoogleMap from 'google-map-react'

export default class App extends Component {
  static defaultProps = {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 9,
    scrollwheel: false
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GoogleMap
        defaultCenter = { this.props.center }
        defaultZoom = { this.props.zoom }>
      </GoogleMap>
    );
  }
}
