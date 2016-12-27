import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={2}
    defaultCenter={ props.mapCenter }>

    { props.markers.map(marker => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(marker)}
      />
    )) }

  </GoogleMap>
));

class Map extends Component {

  render() {
    return (
      <div style={{height: `100%`}}>
        <GettingStartedGoogleMap
          containerElement={
            <div style={{ height: `100%` }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
          markers={ this.props.mapConfig.markers }
          mapCenter={ this.props.mapConfig.mapCenter }
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { mapConfig: state.mapConfig }
}

export default connect(mapStateToProps, null)(Map);
