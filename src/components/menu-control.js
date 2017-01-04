import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchLocation } from '../actions/index';

class MenuControl extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.getOwnLocation = this.getOwnLocation.bind(this);
  }

  onInputChange(e) {
    this.setState({ term: e.target.value });
  }

  getOwnLocation(e) {
    this.props.fetchLocation();
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.fetchLocation(this.state.term);
  }

  render() {
    return (
      <div className="menu-control">
        <form onSubmit={ this.onFormSubmit }>
          <input type="text"
            required

            placeholder="Search a host location"
            value={ this.state.term }
            onChange={ this.onInputChange }></input>
          <button type="submit" className="icon-search"></button>
          <span></span>
        </form>
        <button className="icon-location" onClick={ this.getOwnLocation }></button>
      </div>
    );
  }
}

export default connect(null, { fetchLocation })(MenuControl);
