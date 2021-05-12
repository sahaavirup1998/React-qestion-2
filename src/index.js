import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {Component, useState} from "react";

class Project extends React.Component {
  render() {
    return (
      <div id = "root" data-ns-test = "project-name">
        <h1>Calculator</h1>
      </div>
    )
  }
}

class Description extends React.Component {
  render() {
    return (
      <div id = "root" data-ns-test = "project-description">
      <h3>Basically I make a Calculator using react. it work same as norml calculator.</h3>
      <Project />
      </div>
    );
  }
}

ReactDOM.render(<Description />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
