import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './styles.modules.scss';

class MainPage extends  Component {

  handlerChange = (ev) => {
    const { value } = ev.target;
    console.log(value);
  };

  render() {
    const { appName } = this.props;
    const { handlerChange } = this;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div>!!{appName}!!</div>
          <input
              type="text"
              value={appName}
              onChange={handlerChange}
          />
        </header>
      </div>
    );
  }
}

MainPage.propTypes = {
  appName: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  appName: state.app.name,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
