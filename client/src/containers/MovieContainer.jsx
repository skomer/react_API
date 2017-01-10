var React = require('react');
var MovieList = require('../components/MovieList.jsx');

var MovieContainer = React.createClass({

  getInitialState: function(){
    return {movies: []};
  },
  componentDidMount: function(){
    var url = "http://netflixroulette.net/api/api.php?director=Clint%20Eastwood";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      var data = JSON.parse(request.responseText);
      this.setState({movies: data});
    }.bind(this);
    request.send();
  },


  render: function() {
    return (
      <div className='movie-container'>
        <h2>Movies directed by the great Clint Eastwood</h2>
        <MovieList 
          movies={this.state.movies}
        />
      </div>
    );
  }  




});

module.exports = MovieContainer;