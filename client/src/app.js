var React = require('react');
var ReactDOM = require('react-dom');

var MovieContainer = require('./containers/MovieContainer');

window.onload = function(){
  ReactDOM.render(
    <MovieContainer />,
    document.getElementById('app')
  );
}
