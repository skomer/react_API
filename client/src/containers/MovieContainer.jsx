var React = require('react');
var MovieList = require('../components/MovieList.jsx');

var MovieContainer = React.createClass({




  render: function() {
    return (
      <div className='movie-container'>
        <h2>Movies directed by the great Clint Eastwood</h2>
        <MovieList />
      </div>
    );
  }  




});

module.exports = MovieContainer;