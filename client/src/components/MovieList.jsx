var React = require('react');
var Movie = require('./Movie.jsx');

var MovieList = React.createClass({

  render: function() {
    var movies = this.props.movies.map(function(movie, index) {
      return (
        <Movie show_title={movie.show_title}/>
      );
    });

    return (
      <div>
        {movies}
      </div>
    );
  }


});

module.exports = MovieList;