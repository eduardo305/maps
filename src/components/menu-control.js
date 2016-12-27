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
    this.props.fetchLocation(this.getHost(this.state.term));
  }

  getHost(url) {
    let domain;

    //find & remove protocol (http, ftp, etc.) and get domain
    if (url.indexOf('://') > -1) {
        domain = url.split('/')[2];
    } else {
        domain = url.split('/')[0];
    }

    if (domain.indexOf('www.') > -1) {
      domain = domain.replace('www.', '');
    }

    //find & remove port number
    domain = domain.split(':')[0];

    return domain;
  }

  render() {
    return (
      <div className="menu-control">
        <form onSubmit={ this.onFormSubmit }>
          <input type="url"
            required
            pattern="https?://.+"
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
