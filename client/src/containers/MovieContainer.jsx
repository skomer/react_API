var React = require('react');
var MovieList = require('../components/MovieList.jsx');

var MovieContainer = React.createClass({

  getInitialState: function(){
    return {movies: [], director: ''};
  },
  componentDidMount: function(){
    var url = "http://netflixroulette.net/api/api.php?director=Orson%20Welles";
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
        <h2>Movies directed by the great Orson Welles</h2>
        <form
          className='search-form'
          onSubmit={this.searchDirector}
        >
          <input 
            type='text'
            placeholder='Search for a movie director'
            onChange={this.handleTextChange}
          />
          <input 
            type='submit' 
            value='Submit' 
          />
        </form>
        <MovieList 
          movies={this.state.movies}
        />
      </div>
    );
  },
  handleTextChange: function(event) {
    this.setState({director: event.target.value});
  },
  searchDirector: function(event) {
    event.preventDefault();
    var director = this.state.director;
    var searchTerm = director.replace(/\s/, '%20');
    console.log("got to searchDirector", searchTerm);
  }

});

module.exports = MovieContainer;