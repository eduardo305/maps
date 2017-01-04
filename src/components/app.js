import React, { Component } from 'react';

import Map from './map';
import MenuControl from './menu-control';

export default class App extends Component {

  render() {
    return (
      <div className="app-container">
        <MenuControl />
        <Map />
      </div>
    );
  }
}
